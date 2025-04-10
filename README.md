This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# Prisma installation
## Install Prisma and the Prisma Client
```bash
  pnpm add -D prisma
  pnpm add @prisma/client
```

# Prisma init
# To initialize Prisma in your project, you can use the following command:
```bash
  # Initialize Prisma in your project
  # This will create a new Prisma folder with a schema.prisma file
  # and a .env file in the root of your project
  # The .env file is where you will store your database connection string
  # The schema.prisma file is where you will define your data model
  # and database connection

pnpx prisma init

  #after init prisma and prepare model on shema below is the command for create and sync database with Neon.tech

# Create or migrate table this also create the database if it doesn't exist and generate the prisma client top. 
pnpm dlx prisma db push

#When you edit prisma schema you need to create a migration to sync with database and update the Prisma client, you can use the following commands in your terminal:
#Create a new migration:
pnpm dlx  prisma migrate dev --name <migration_name>
#Replace <migration_name> with a descriptive name for your migration.
# This will create a new migration file in the prisma/migrations folder and apply the migration to the database.

# Generate the Prisma Client
pnpm dlx prisma generate

# Prisma studio or GUI
pnpm dlx prisma studio

```

### Update command
```bash
  # Install Prisma CLI
  # Initialize Prisma in your project
  # This will create a new Prisma folder with a schema.prisma file
  # and a .env file in the root of your project
  # The .env file is where you will store your database connection string
  # The schema.prisma file is where you will define your data model
  # and database connection
  # You can also use the --datasource flag to specify a different datasource
  # For example, if you want to use a SQLite database, you can run:
  # pnpx prisma init --datasource-provider sqlite
  # This will create a new SQLite database file in the root of your project
  # and update the schema.prisma file to use SQLite as the datasource
  # If you want to use a different database, you can specify the connection string
  # in the .env file and Prisma will automatically detect the database type
  # For example, if you want to use a PostgreSQL database, you can run:
  # pnpx prisma init --datasource-provider postgresql
  # This will create a new PostgreSQL database and update the schema.prisma file
  # to use PostgreSQL as the datasource
  # You can also use the --create-db flag to create the database if it doesn't exist
  # For example, if you want to create a new PostgreSQL database, you can run:
  # pnpx prisma init --datasource-provider postgresql --create-db
  # This will create a new PostgreSQL database and update the schema.prisma file
  # to use PostgreSQL as the datasource
  # You can also use the --force flag to overwrite the existing schema.prisma file
  # For example, if you want to overwrite the existing schema.prisma file, you can run:
  # pnpx prisma init --force
  # This will overwrite the existing schema.prisma file and create a new .env file
  # in the root of your project
  # You can also use the --skip-generate flag to skip generating the Prisma Client
  # For example, if you want to skip generating the Prisma Client, you can run:
  # pnpx prisma init --skip-generate
  # This will create a new Prisma folder with a schema.prisma file
  # and a .env file in the root of your project
  # and skip generating the Prisma Client
  # You can also use the --skip-seed flag to skip seeding the database
  # For example, if you want to skip seeding the database, you can run:
  # pnpx prisma init --skip-seed
  # This will create a new Prisma folder with a schema.prisma file
  # and a .env file in the root of your project
  # and skip seeding the database
  # You can also use the --skip-migrate flag to skip migrating the database
  # For example, if you want to skip migrating the database, you can run:
  # pnpx prisma init --skip-migrate
  # This will create a new Prisma folder with a schema.prisma file
  # and a .env file in the root of your project

  # Create and apply migrations
  # This will create a new migration file in the prisma/migrations folder
  # and apply the migration to the database
  # The migration file will contain the SQL commands to create the tables
  # and columns defined in the schema.prisma file
  # The migration file will also contain the SQL commands to create the indexes
```

## How to install Mailtrap
```bash
  # Install Mailtrap
  pnpm install mailtrap
```

## Generate PDF with jsPDF
```bash
  # Install jsPDF
  pnpm install jspdf
```
