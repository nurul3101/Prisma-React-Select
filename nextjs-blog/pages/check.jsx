import React from "react";
import Select from "react-select";
import prisma1 from "../lib/prismadb.ts";
// import { PrismaClient } from '../prisma/first-client';

const styles = {
  control: (base) => ({
    ...base,
    "&:hover": {
      borderColor: "blue",
    },
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "inherit",
  }),
  singleValue: (base) => ({
    ...base,
    color: "inherit",
  }),
};

export const getServerSideProps = async () => {

  const records = await prisma1.info.findMany({
    where: {
      information:'test'
    },
    select:{
      information:true,
      keywords:true,
      subject:true,
    }
  });

  const databaseOptions = records.map((record) => ({
    label: record.information,
    value: record.information,
  }));

  console.log('database @',records)

  return { props: { database: { records: records, options: databaseOptions} }}
};

const Button = ({ database }) => {
  console.log('props',database);
  return (
    <div>
      <div>Select Button</div>
      <Select
        defaultValue={database.records.subject}
        onClick={() => setShow(false)}
        onChange={(database) => setUserChoice(database.records.information)}
        options={database.options}
        styles={styles}
      />
    </div>
  );
};

export default Button;
