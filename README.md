
# Quick examples for Rutile Kick Start

## Note

This example presuppose you are in the disposable environment.
See the environment setup guide in Rutile.

Before starting each test, you have to delete object cache in Redis.

```
rm dump.rdb
```

## 1st_step

Minmum example.

```
cd 1st_step/en

rutile md2config ./Config.txt
rutile generate server ./Config.js
rutile generate client ./Config.js
rutile build tiapp ./Config.js

createdb product
psql -f ./Schema/Product.sql -d product
psql -f ./SampleData/Product.sql -d product

export NODE_PATH=$NODE_PATH:./DemoShopServer; node ./DemoShopServer/server.js
titanium build -p ios -d ./DemoShopApp --retina --sim-64-btin --tall
```

## 2nd_step

2nd_step = 1st_step + aggregation + image

Aggregation(aka collection) defined as a entry with prefix *.
Images are saved as MIME encoded text in the text field.

```
cd 2nd_step/en

rutile md2config ./Config.txt
rutile generate server ./Config.js
rutile generate client ./Config.js
rutile build tiapp ./Config.js

dropdb product

createdb product

psql -f ./Schema/Product.sql -d product
psql -f ./SampleData/Product.sql -d product

export NODE_PATH=$NODE_PATH:./DemoShopServer; node ./DemoShopServer/server.js
titanium build -p ios -d ./DemoShopApp --retina --sim-64-btin --tall
```

## 3rd_step

3rd_step = 2nd_step + PostGIS + dblink + injection

Requires PostGIS and dblink.

This example represents geographical data, cross database search, and code injection for 'cross edit form interaction'.

```
cd 3rd_step/en

rutile md2config ./Config.txt
rutile generate server ./Config.js
rutile generate client ./Config.js
rutile build tiapp ./Config.js

dropdb product

createdb product
echo 'create extension postgis' | psql -d product

psql -f ./Schema/Product.sql -d product
psql -f ./SampleData/Product.sql -d product

dropdb order

createdb order
psql -f ./Schema/Order.sql -d order
echo 'create extension dblink' | psql -d order

export NODE_PATH=$NODE_PATH:./DemoShopServer; node ./DemoShopServer/server.js
titanium build -p ios -d ./DemoShopApp --retina --sim-64-btin --tall
```

1. Entity List -> Order
2. Add a order by right navi button
3. Add a customer, select date
4. Add Order Items
5. Back to the Entity List then go Order Item
6. Then, search Order Item by ProductClassID, that is defined in the other database.


## 4th_step

4th_step = 3rd_step + authentication logic

```
cd 4th_step/en

rutile md2config ./Config.txt
rutile generate server ./Config.js
rutile generate client ./Config.js
rutile build tiapp ./Config.js

dropdb product

createdb product
echo 'create extension postgis' | psql -d product

psql -f ./Schema/Product.sql -d product
psql -f ./SampleData/Product.sql -d product

dropdb order

createdb order
psql -f ./Schema/Order.sql -d order
echo 'create extension dblink' | psql -d order

dropdb shop

createdb shop
psql -f ./Schema/Shop.sql -d shop
psql -f ./SampleData/Shop.sql -d shop

export NODE_PATH=$NODE_PATH:./DemoShopServer; node ./DemoShopServer/server.js
titanium build -p ios -d ./DemoShopApp --retina --sim-64-btin --tall
```

1. Try sign-in by email address and password defined in SampleData/Shop.sql.
2. Use the app.
3. After 1min(default token lifetime defined in Config) token will be expired, then appears dialog message.
5. Singn-in again.


## 5th_step

5th_step = 4th_step + slide menu option

```
cd 5th_step/en

rutile md2config ./Config.txt
rutile generate server ./Config.js
rutile generate client ./Config.js
rutile build tiapp ./Config.js

dropdb product

createdb product
echo 'create extension postgis' | psql -d product

psql -f ./Schema/Product.sql -d product
psql -f ./SampleData/Product.sql -d product

dropdb order

createdb order
psql -f ./Schema/Order.sql -d order
echo 'create extension dblink' | psql -d order

dropdb shop

createdb shop
psql -f ./Schema/Shop.sql -d shop
psql -f ./SampleData/Shop.sql -d shop

export NODE_PATH=$NODE_PATH:./DemoShopServer; node ./DemoShopServer/server.js
titanium build -p ios -d ./DemoShopApp --retina --sim-64-btin --tall
```

## Special thanks

Sample image from [food.foto](http://food.foto.ne.jp).



