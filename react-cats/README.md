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

## Descripción prueba 

<h5>React Cats</h5>
Esta prueba consiste en crear una aplicación básica de React a tu gusto puedes
hacerlo en el mismo componente App o crear componentes para cada parte,
cuanto más organizado y estructurado esté todo mejor.
Requisitos:
 -Debes de hacer una petición a este url https://api.thecatapi.com/v1/images/search
 -Verás que devuelve un objeto JSON cada vez que la consultas ese
 objeto JSON contiene una url de imagen de un gato, cada vez que la
 consultas devuelve un objeto nuevo con una imagen nueva
 -La idea es que hecha la petición conserves lo que te devuelve en el
 estado de React y pintes una imagen pasándole la url que has
 obtenido de la API como `src` a la imagen
Es un extra:
 -Componetizar y estructurar bien el proyecto y código
 -Que la aplicación sea bonita (puedes maquetar)
Para la entrega puedes entregarlo en un repositorio git que hagas para esto y
mandarme la url del repo para revisarlo :)

<h5>FizzBuzz</h5>
Esta prueba es algo más sencilla es para ver tu razonamiento lógico
básicamente tienes que hacer una función que reciba los números del 1 al 100,
Ej `function fizzBuzz(numbers)`
Y esa función debe hacer un console de `Fizz` por cada número múltiplo
de 3, `Buzz` por cada múltiplo de 5 y cuando sea múltiplo de ambos
`FizzBuzz`