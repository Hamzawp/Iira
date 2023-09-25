import React from "react";
import "./StudentSingleProduct.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import 'react-tabs/style/react-tabs.css';
import {
  AiOutlineHeart,
  AiOutlineEye,
  AiOutlineStar,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { SiFuturelearn } from "react-icons/si";
import { BsEye, BsInstagram, BsFillReplyAllFill } from "react-icons/bs";
import { BiLink, BiLogoFacebookCircle, BiPlay } from "react-icons/bi";
import { LiaDownloadSolid } from "react-icons/lia";
import { FiTwitter } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import { useTranslation } from "react-i18next";

// import video from "../../assets/imamali.mp4";
import StudentSingleProjectPieChart from "./StudentSingleProjectPieChart";
const StudentSingleProject = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div>
        <div className="singleProjHeader">
          <div className="iconProjHeader">
            <img src="https://media.istockphoto.com/id/1222820573/vector/letter-b-icon.jpg?s=612x612&w=0&k=20&c=wt-kzXAVV1OLr0iVHy-YtKJcz56bkmgpqLTDW33y2fI=" />
          </div>
          <div className="titleProjHeader">
            <h2>{t("BarterX - Ecommmerce to Swap")}</h2>
            <p>{t("Thadomal Shahani Engineering College")}</p>
            {/* <p>Aritficial Intelligence, Web Development</p> */}
            <div className="viewDiv">
              <AiOutlineEye size="1.3em" />
              <p className="views">24,870 views</p>
            </div>
          </div>
          <div className="otherIconsProjHeader">
            <AiOutlineHeart className="hoverme" />
            <div className="vertical"></div>
            <SiFuturelearn className="hoverme" />
          </div>
        </div>
        <Tabs className="tabsDiv">
          <TabList className="tabList">
            <Tab className="tabName">{t("About")}</Tab>
            <Tab className="tabName">{t("Video")}</Tab>
            <Tab className="tabName">{t("Report")}</Tab>
            <Tab className="tabName">{t("Code")}</Tab>
            <Tab className="tabName">{t("Collaborators")}</Tab>
            <Tab className="tabName">{t("Documentation")}</Tab>
            <Tab className="tabName">{t("Discussion Forums")}</Tab>
          </TabList>

          <TabPanel className="tabPanel about">
            <div className="aboutDiv">
              <div className="leftAboutDiv">
                <div className="abstractInfo">
                  <h3>Abstract</h3>
                  <p>
                    {t(
                      "BarterX is an innovative e-commerce platform that provides a unique way for buyers and sellers to trade their goods and services without involving money. BarterX aims to promote sustainable consumption by enabling individuals to swap their unwanted items with others, thereby reducing waste and saving money. The platform is user-friendly, intuitive, and secure, making it easy for anyone to create a profile and start trading. With BarterX, users can easily search for products and services they need, and make offers to other members in exchange for their goods or services. The platform also includes advanced search and recommendation algorithms that match offers based on relevance, location, and ratings. In addition, BarterX community members can rate and review each other, creating a trustworthy and transparent environment for trading. Overall, BarterX offers a compelling solution for those looking for an alternative to traditional e-commerce models, which are often focused on profit and consumerism."
                    )}
                  </p>
                </div>
                <div className="deploymentsInfo">
                  <h3>Deployments</h3>
                  <div className="links">
                    <p>
                      {t("GitHub")} -<a href="#"> www.github.com</a>
                    </p>
                    <p>
                      {t("GitHub")} -<a href="#"> www.github.com</a>
                    </p>
                    <p>
                      {t("GitHub")} -<a href="#"> www.github.com</a>
                    </p>
                  </div>
                </div>
                <div className="langsInfo">
                  <h3>Technical Stack</h3>

                  {/* <figure class="pie-chart">
                    <h2>Languages used to develop the software</h2>
                    <figcaption>
                      Javascript<span style={{ color: "#edc949" }}></span>
                      <br />
                      HTML<span style={{ color: "#e15759" }}></span>
                      <br />
                      CSS<span style={{ color: "#f28e2c" }}></span>
                      <br />
                      PHP<span style={{ color: "#4e79a7" }}></span>
                      <br />
                    </figcaption>
                    <cite>Technical Stack</cite>
                  </figure> */}

                  <StudentSingleProjectPieChart />
                </div>
              </div>
              <div className="rightAboutDiv">
                <h2 style={{ letterSpacing: "2px" }}>INFO</h2>
                <div className="starsDiv">
                  <AiOutlineStar size="1.2em" />
                  <p>3 {t("stars")}</p>
                </div>
                <div className="watchingDiv">
                  <BsEye size="1.2em" />
                  <p> 1 {t("watching")}</p>
                </div>
                <div className="downloadsDiv">
                  <LiaDownloadSolid size="1.2em" />
                  <p> 4 {t("downloads")}</p>
                </div>
                <div className="liveDiv">
                  <BiLink size="1.2em" />
                  <p> www.vercel.app</p>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel className="tabPanel video">
            <video
              width="750"
              height="400"
              controls
              src={"https://youtu.be/A5X4RFqPWnE?si=1gPmlejB4U8DmiKO"}
              type="video/mp4"
            ></video>
            <div className="descVideo">
              <h2>Description</h2>
              <p>
                {t(
                  "BarterX is an innovative e-commerce platform designed to facilitate the trading and swapping of goods between individuals and businesses without the need for traditional currency. With BarterX, users can exchange goods and services on a peer-to-peer basis, allowing them to acquire what they need while getting rid of what they no longer use or need. The platform incorporates a range of features such as product listings, messaging tools, and a secure payment system to ensure a smooth and successful exchange process between users. BarterX promotes sustainable living, fosters community building, and allows users to save money while reducing their environmental footprint. Whether you’re looking for a new laptop or want to get rid of some old clothes, BarterX is the perfect place to find what you need and get rid of what you don’t."
                )}
              </p>
            </div>
          </TabPanel>
          <TabPanel className="tabPanel report">
            <div>
              <h4>REPORT</h4>
              <iframe
                src="https://docs.google.com/viewer?url=http://www.pdf995.com/samples/pdf.pdf&embedded=true"
                frameborder="0"
                height="500px"
                width="100%"
              ></iframe>
            </div>
          </TabPanel>
          <TabPanel className="tabPanel code">
            <h2>Any content 4</h2>
          </TabPanel>
          <TabPanel className="tabPanel collaborators">
            <div className="collab">
              <div className="profileCard">
                <div className="imgCard">
                  <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" />
                </div>
                <div className="nameCard">
                  <h2>Ethan Rivers</h2>
                </div>
                <div className="professCard">
                  <p>UI/UX Designer</p>
                </div>
                <div className="aboutCard">
                  <p>
                    Lorem ipsum , sit amet sit sit amet sit adipisicing elit.
                    Quis fugiat totam mollitia, ipsa a officia{" "}
                  </p>
                </div>
                <div className="iconsSection">
                  <div className="iconSec">
                    <AiOutlineLinkedin size="1.5em" />
                  </div>
                  <div className="iconSec">
                    <FiTwitter size="1.5em" />
                  </div>
                  <div className="iconSec">
                    <BsInstagram size="1.5em" />
                  </div>
                  <div className="iconSec">
                    <BiLogoFacebookCircle size="1.5em" />
                  </div>
                </div>
                <div className="buttonsConnect">
                  <button className="FollowMe">FOLLOW</button>
                  <button className="MessageMe">MESSAGE</button>
                </div>
              </div>
              <div className="profileCard">
                <div className="imgCard">
                  <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" />
                </div>
                <div className="nameCard">
                  <h2>Ethan Rivers</h2>
                </div>
                <div className="professCard">
                  <p>UI/UX Designer</p>
                </div>
                <div className="aboutCard">
                  <p>
                    Lorem ipsum , sit amet sit sit amet sit adipisicing elit.
                    Quis fugiat totam mollitia, ipsa a officia{" "}
                  </p>
                </div>
                <div className="iconsSection">
                  <div className="iconSec">
                    <AiOutlineLinkedin size="1.5em" />
                  </div>
                  <div className="iconSec">
                    <FiTwitter size="1.5em" />
                  </div>
                  <div className="iconSec">
                    <BsInstagram size="1.5em" />
                  </div>
                  <div className="iconSec">
                    <BiLogoFacebookCircle size="1.5em" />
                  </div>
                </div>
                <div className="buttonsConnect">
                  <button className="FollowMe">FOLLOW</button>
                  <button className="MessageMe">MESSAGE</button>
                </div>
              </div>
              <div className="profileCard">
                <div className="imgCard">
                  <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" />
                </div>
                <div className="nameCard">
                  <h2>Ethan Rivers</h2>
                </div>
                <div className="professCard">
                  <p>UI/UX Designer</p>
                </div>
                <div className="aboutCard">
                  <p>
                    Lorem ipsum , sit amet sit sit amet sit adipisicing elit.
                    Quis fugiat totam mollitia, ipsa a officia{" "}
                  </p>
                </div>
                <div className="iconsSection">
                  <div className="iconSec">
                    <AiOutlineLinkedin size="1.5em" />
                  </div>
                  <div className="iconSec">
                    <FiTwitter size="1.5em" />
                  </div>
                  <div className="iconSec">
                    <BsInstagram size="1.5em" />
                  </div>
                  <div className="iconSec">
                    <BiLogoFacebookCircle size="1.5em" />
                  </div>
                </div>
                <div className="buttonsConnect">
                  <button className="FollowMe">FOLLOW</button>
                  <button className="MessageMe">MESSAGE</button>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel className="tabPanel documentation">
            <h2>Any content 6</h2>
          </TabPanel>
          <TabPanel className="tabPanel discforum">
            <div className="forum">
              <div className="commentsSec">
                <div className="commentBody">
                  <div className="commentHeader">
                    <img src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" />
                    <h3>Aakash Rajpurohit</h3>
                    <p>2d</p>
                  </div>
                  <div className="commentPara">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Optio iusto quia tempore ut minus nihil blanditiis enim
                      quo, fugiat voluptatum aperiam nesciunt, repellat commodi,
                      quisquam dolore laudantium ab? Laborum libero aut delectus
                      molestiae. Magni, ex!
                    </p>
                  </div>
                </div>
                <div className="commentBody replyComment">
                  <div className="commentHeader">
                    <BsFillReplyAllFill />
                    <img src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" />
                    <h3>Pravin Sharma</h3>
                    <p>1d</p>
                  </div>
                  <div className="commentPara">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Optio iusto quia tempore ut minus nihil blanditiis enim
                      quo, fugiat voluptatum aperiam nesciunt, repellat commodi,
                      quisquam dolore laudantium ab? Laborum libero aut delectus
                      molestiae. Magni, ex!
                    </p>
                  </div>
                </div>
                <div className="commentBody">
                  <div className="commentHeader">
                    <img src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" />
                    <h3>Niyati Shetty</h3>
                    <p>3d</p>
                  </div>
                  <div className="commentPara">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Optio iusto quia tempore ut minus nihil blanditiis enim
                      quo, fugiat voluptatum aperiam nesciunt, repellat commodi,
                      quisquam dolore laudantium ab? Laborum libero aut delectus
                      molestiae. Magni, ex!
                    </p>
                  </div>
                </div>
              </div>
              <div className="writeComment">
                {/* <p>Write A comment</p> */}
                <input
                  type="text"
                  className="comment"
                  placeholder="Write a Comment . . ."
                />
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentSingleProject;
