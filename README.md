using node v19.7.0 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`


Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


CREATE function [dbo].[GetAnnualEffectiveRate] (@p_Rate float, @p_TermId smallint, @p_ValueDate smalldatetime, @p_MaturityDate smalldatetime, @p_CurrencyId int)  
returns float    
as    
begin    
  declare  @v_RateDivision float(24),  
    @v_AER       decimal(24, 2),  
    @v_DivideBy  float(24),  
    @v_Year   int,  
    @v_Month   int,  
    @v_Base   float,  
    @v_Terms   float,  
    @v_DealDays  int  
  
 SET @v_RateDivision = 0  
 SET @v_AER   = 0  
 SET @v_DivideBy  = 1  
 set @v_Base   = 1  
  
 if  @p_TermId <= 0  
  RETURN -1  
    
 if @p_ValueDate is NULL or @p_MaturityDate is NULL  
  return -2  
    
 select @v_Year = Years, @v_Month = Months  
 from Term  
 where TermId = @p_TermId  
   
 --check the type of Term it is and calculate AER accordingly  
 if @v_Year > 0   
 begin  
  set @v_AER = @p_Rate  
  goto THE_EXIT  
 end  
 else if @v_Month > 0  
 begin  
  set @v_Base = 12 --Monthly Deal  
  set @v_Terms = @v_Month  
 end  
 else   
 begin  
  --Deal is either, Weekly, daily or Fixed. Get the number of days and calculate accordingly  
  set @v_Terms = datediff(d, @p_ValueDate, @p_MaturityDate)  
    
  --Get number of Working days in a year  
  set @v_Base = dbo.GetWorkingDaysInAYear(@p_ValueDate, @p_CurrencyId)  
    
  if @v_Base = -1  
   return -1  
 end  
  
 SET @v_DivideBy = (@v_Base/@v_Terms)  
   
 if @v_DivideBy < 1  
  set @v_DivideBy = 1  
 else  
  set @v_DivideBy = round(@v_DivideBy, 0, 1)  
    
 SET @v_RateDivision = (@p_Rate/(@v_DivideBy*100))  
 SELECT  @v_AER = 100 * (POWER((@v_RateDivision+1), @v_DivideBy)-1)  
   
THE_EXIT:  
 SELECT  @v_AER = ROUND(@v_AER,2)  
 RETURN @v_AER  
END    
