# Iira

<br/>

<p align="center">
  <img src="./client/src/assets/logo.png" width="20%" />
</p>

<p align="center">
  Online integrated platform for projects taken up by the students of various universities/colleges
  <br />
  <br />
  <a href="#table-of-contents"><b>Explore the docs »</b></a>
  <br />
  <br />
  <a href="#architecture-and-design">Architecture</a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#demonstration">Features</a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#contributing">Local Setup</a>
  <br />
</p>

## Table Of Contents

- [About the Project](#about-the-project)
- [Takeaways](#takeaways)
- [Unique Selling Points](#unique-selling-points)
<!-- - [Architecture](#architecture) -->
- [Demonstration & Features](#demonstration)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
<!-- - [License](#license) -->
- [Authors](#authors)

## About The Project

**Challenges Faced by University**

- Lack of Central Repository: There might be a lack of a centralized repository for student projects, making it difficult to showcase the collective achievements of the institution.
- Innovation Promotion: Some universities may struggle to create a culture of innovation and research among students due to limited exposure to diverse projects.
- Resource Allocation: Allocating resources to support student projects and provide necessary infrastructure can be challenging.
- Competitive Pressure: Universities may face the challenge of maintaining competitiveness and attracting talented students in a rapidly evolving educational landscape.

<br />

**Challenges Faced by Students**

- Limited Exposure: In spite of having many states, there is lack of communication among them on the grounds of project development.
- Plagiarism Concerns: Students are in need of a platform that maintains the authenticy of project ownership.
-  Kick start project: Vast majority of students lack the idea of how to begin a project and its initial requirments.
- Project  volunteering: Few projects lay down due to lack of volunteering support or financial support.
- Language Gap: Vast Majority of Indian students are not familiar with English language

<br />

**Challenges Faced by Faculty**

- Assessment Burden: Assessing a large number of student projects can be time-consuming and may require additional resources.
- Limited Resources: Teachers may face constraints in providing a diverse range of project ideas and resources to students, potentially limiting the scope of student projects.
- Innovation Gap: Teachers may face difficulty in staying updated with the latest innovative trends and projects happening in other institutions.

<br />

## Takeaways

- The problem statement recognizes the importance of innovation in education, particularly in universities and colleges.
- The proposal suggests creating a common knowledge platform where students can share their project works. 
- The platform is expected to include a plagiarism detection feature, which can help ensure the originality of the projects shared by students.
- The platform is intended to support peer learning, allowing students to gain insights from projects undertaken by their peers in other institutions.
- The platform's information could potentially foster cross-functional research collaborations between universities and colleges, encouraging joint projects and research initiatives.
- The initiative is proposed to be implemented at a national level, involving universities and colleges throughout the country, thereby promoting a broader exchange of ideas and knowledge.

## Unique Selling Points

- SCRUTINIZED LOGIN OF USERS: Implemented a hierarchy of user to maintain accessing rights and making sure the university has the supreme role over the colleges and its students
- CROSS-DISCIPLINARY COLLABORATION: Platform suggests interdisciplinary projects, fostering collaborations like bioinformatics for CS and biology students.
- Future SCOPE RECOMMENDATION: Helping students to get new innovative ideas on thier uploaded projects, and help others to take that project for enhancements
- COMPREHENSIVE ANALYTICS: Institutions access performance data, project rates, and collaboration analytics, enhancing curriculum refinement through data-driven insights.
- KICKSTART PROJECT: Helping students to get new innovative ideas and put their high efforts there rather than finding ideas.



<!-- ## Architecture

The architecture and workflow was built using smartdraw.

<img src="./client/src/assets/architecture1.png" alt="architecture">
<br />
<img src="./client/src/assets/architecture2.png" alt="architecture"> -->

## Demonstration

<br />

**Student Panel**

<p align="left">
<video width="100%" controls>
  <source src="./client/src/assets/Demo/student_panel.mp4" type="video/mp4">
</video>
</p>

**SPOC Panel**

<p align="left">
<video width="100%" controls>
  <source src="./client/src/assets/Demo/SPOC_panel.mp4" type="video/mp4">
</video>
</p>

**Multi Languange Functionality**

<p align="left">
<video width="100%" controls>
  <source src="./client/src/assets/Demo/mult_language.mp4" type="video/mp4">
</video>
</p>

<br />
<br />

### Technologies Used

- Workflow and Architecture Design
  - SmartDraw
- Frontend
  - React.js
  - CSS
- Backend
  - Node.js (Express.js)
  - PostgreSQL - SQL Database
- Machine Learning
  - NLP(cosine similarity)
  - Matrix Factorization
  - Content-based filtering
  - Llm

<br />

## Contributing

**Local Setup || Project Structure**

NOTE: Individual instructions can be found in respective directories.

- The project contains 4 broad directories.

```
*
├───client
└───server
```

- `client`: The frontend for the application.
- `server`: The backend for the application.

<br />

**Client**

For local setup of frontend:

- `cd client`
- `npm i`
- `npm run dev`
- Go to `localhost:5137`

Structure

```
src
├───assets
├───components
├───Screens
├───App.jsx
└───main.jsx
```

Individual Component & Screens Structure

```
component
├───component.jsx
└───component.css
```

```
Screens
├───page.jsx
└───page.css
```

<br />
<br />

**Server**

For local setup of backend:

- `cd server`
- `npm i`
- `npm start`

```
server
├───middlewares
├───prisma
├───routes
├───utils
├───index.js
└───package.json
```

<br />
<br />

## Authors

- Om Shete
  - [LinkedIn](https://www.linkedin.com/in/om-shete-25748522a/)
- Mohib Abbas Sayed
  - [LinkedIn](https://www.linkedin.com/in/mohib-abbas-sayed-83837422a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)
- Hamza Sayyed
  - [LinkedIn](https://shorturl.at/hjAEI)
- Parth Puranik
  - [LinkedIn](https://www.linkedin.com/in/parth-puranik-2b8643250/)
- Abhishek Upadhyay
  - [LinkedIn](https://www.linkedin.com/in/abhishek-upadhyay-26397a224/)
- Sakshi Bhandari
  - [LinkedIn](https://www.linkedin.com/in/sakshipb/)
