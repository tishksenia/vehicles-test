# How to build and run

`yarn` (`npm install`) - install dependencies

`yarn start` (`npm run start`) - run locally

`yarn build` (`npm run build`) - build

`yarn test` (`npm run tests`) - run tests

App is also deployed here: https://celebrated-meringue-9c851d.netlify.app/

### Files to test the import features: 

[vehicles.json](https://raw.githubusercontent.com/tishksenia/vehicles-test/main/src/__tests__/test-files/vehicles.json?token=GHSAT0AAAAAAB56PKZUEIYCDD6OEOAC6FKKY63YM5Q)

[equipment.json](https://raw.githubusercontent.com/tishksenia/vehicles-test/main/src/__tests__/test-files/equipments.json?token=GHSAT0AAAAAAB56PKZUPKLLDVCEMAOS6XQ4Y63YNUA)

## Known bugs/Things to improve

-   Add unique vehicle/equipment IDs check on a file import. Currently, if vehicle with id `v1` was manually added and after that imported from file with the same ID, it will create duplicate IDs in the vehicle store and cause all kinds of bugs
-   Store imported/added vehicles or equipments in localStorage or in any other persistent storage
-   Add feature to manage equipments (delete from the application, add new ones)
-   Add more tests
-   Handle case when fuel type or status value from file is incorrect (for example, `Eletrical` insead of `Electrical`). Currently, importing a vehicle with such values will result in edit form not picking up the correct type
