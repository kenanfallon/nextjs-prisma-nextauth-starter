# NextJS, Prisma, Planetscale, NextAuth Starter

## Getting Started

Copy the example `.env` file to get started:

`mv .env.example .env`

Create a database in [Planetscale](https://planetscale.com) and ensure the [automatic copy migration data](https://docs.planetscale.com/concepts/branching#automatically-copy-migration-data) is enabled and set to `Prisma`. 

Using the [Planetscale CLI](https://planetscale.com/cli) create two development branches:

* `pscale branch create database-name setup`
* `pscale branch create database-name shadow`

In seperate terminals, connect to each of these branches with the CLI:

* `pscale connect database-name setup --port 3309`
* `pscale connect database-name shadow --port 3310`

Run a [Prisma Migration](https://www.prisma.io/docs/concepts/components/prisma-migrate) to create the tables required by Next Auth:

`npx prisma migrate dev --name init`

Create a Planetscale [deploy request](https://docs.planetscale.com/concepts/branching#deploying-branches) to migrate the changes from our `setup` branch to `main` with the CLI:

`pscale deploy-request create database-name setup`

Deploy the deploy request with the CLI:

`pscale deploy-request deploy database-name 1`

Sign up for a [Mailtrap](https://mailtrap.io) account to access to email verification links and fill in the SMTP details in the `.env` file. 

Close the two terminal windows connecting to the two branches and connect to the main branch:

`pscale connect tutorial-db main --port 3309`

Now run the development server:

`npm run dev`

And click the `Sign In` button to sign in.