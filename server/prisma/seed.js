const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding...");
  console.log("Seeding Users");
  // seeding users
  const data = [
    {
      user_id: 1,
      email: "user1@example.com",
      first_name: "John",
      last_name: "Doe",
      password: "password123",
      dob: "1990-05-15T00:00:00.000Z",
      role: "admin",
    },
    {
      user_id: 2,
      email: "user2@example.com",
      first_name: "Jane",
      last_name: "Smith",
      password: "securePass",
      dob: "1985-08-20T00:00:00.000Z",
      role: "university",
    },
    {
      user_id: 3,
      email: "user3@example.com",
      first_name: "Alice",
      last_name: "Johnson",
      password: "samplePassword",
      dob: "1992-03-10T00:00:00.000Z",
      role: "SPOC",
    },
    {
      user_id: 4,
      email: "user4@example.com",
      first_name: "Bob",
      last_name: "Brown",
      password: "secretPass123",
      dob: "1988-11-25T00:00:00.000Z",
      role: "college_faculty",
    },
    {
      user_id: 5,
      email: "user5@example.com",
      first_name: "Eva",
      last_name: "Wilson",
      password: "strongPassword",
      dob: "1995-07-05T00:00:00.000Z",
      role: "student",
    },
    {
      user_id: 6,
      email: "user6@example.com",
      first_name: "Michael",
      last_name: "Davis",
      password: "mypass123",
      dob: "1993-02-12T00:00:00.000Z",
      role: "university",
    },
    {
      user_id: 7,
      email: "user7@example.com",
      first_name: "Sarah",
      last_name: "Taylor",
      password: "secure123",
      dob: "1991-09-30T00:00:00.000Z",
      role: "SPOC",
    },
    {
      user_id: 8,
      email: "user8@example.com",
      first_name: "David",
      last_name: "Lee",
      password: "testpass",
      dob: "1987-04-17T00:00:00.000Z",
      role: "college_faculty",
    },
    {
      user_id: 9,
      email: "user9@example.com",
      first_name: "Olivia",
      last_name: "Anderson",
      password: "password456",
      dob: "1994-12-08T00:00:00.000Z",
      role: "student",
    },
    {
      user_id: 10,
      email: "user10@example.com",
      first_name: "Daniel",
      last_name: "Martin",
      password: "mysecurepass",
      dob: "1998-06-28T00:00:00.000Z",
      role: "university",
    },
  ];

  await prisma.user.createMany({ data });
  console.log("Seeding user completed.............");

  // seeding colleges
  console.log("Seeding Universities.............");
  const Universities = [
    {
      uni_id: 1,
      uni_name: "University of XYZ",
      uni_address: "123 University Avenue",
      uni_phone: "+1234567890",
      uni_head_id: 2,
    },
    {
      uni_id: 2,
      uni_name: "ABC University",
      uni_address: "456 College Road",
      uni_phone: "+9876543210",
      uni_head_id: 6,
    },
    {
      uni_id: 3,
      uni_name: "Institute of Technology",
      uni_address: "999 Tech Avenue",
      uni_phone: "+7778889999",
      uni_head_id: 10,
    },
  ];
  await prisma.universities.createMany({ data: Universities });
  console.log("Seeding Universities completed.............");

  // seeding colleges
  console.log("Seeding Colleges.............");
  const Colleges = [
    {
      college_id: 1,
      college_name: "College of Engineering",
      university_id: 1,
    },
    {
      college_id: 2,
      college_name: "College of Arts",
      university_id: 1,
    },
    {
      college_id: 3,
      college_name: "College of Science",
      university_id: 2,
    },
    {
      college_id: 4,
      college_name: "College of Business",
      university_id: 3,
    },
  ];
  await prisma.colleges.createMany({ data: Colleges });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
