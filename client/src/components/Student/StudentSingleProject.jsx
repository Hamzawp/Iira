import React from 'react'
import './StudentSingleProduct.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import {AiOutlineHeart, AiOutlineEye, AiOutlineStar, AiOutlineLinkedin} from "react-icons/ai"
import {SiFuturelearn} from "react-icons/si"
import {BsEye, BsInstagram, BsFillReplyAllFill} from "react-icons/bs"
import {BiLink, BiLogoFacebookCircle, BiPlay} from "react-icons/bi"
import {LiaDownloadSolid} from "react-icons/lia"
import {FiTwitter} from "react-icons/fi"
import {CiFacebook} from "react-icons/ci"
import video from "../../assets/imamali.mp4"
const StudentSingleProject = () => {
  return (
    <div>
      <div >
        <div className="singleProjHeader">
          <div className="iconProjHeader">
            <img src="https://media.istockphoto.com/id/1222820573/vector/letter-b-icon.jpg?s=612x612&w=0&k=20&c=wt-kzXAVV1OLr0iVHy-YtKJcz56bkmgpqLTDW33y2fI="/>
          </div>
          <div className="titleProjHeader">
              <h2>BarterX - Ecommmerce to Swap</h2>
              <p>Thadomal Shahani Engineering College</p>
              {/* <p>Aritficial Intelligence, Web Development</p> */}
              <div className="viewDiv">
              <AiOutlineEye size="1.3em"/> 
                <p className='views'>24,870 views</p>
              </div>
              
          </div>
          <div className="otherIconsProjHeader">
              <AiOutlineHeart className='hoverme'/>
              <div className="vertical"></div>
              <SiFuturelearn className='hoverme'/>
          </div>
        </div>
        <Tabs className="tabsDiv">
          <TabList className="tabList">
            <Tab className="tabName">About</Tab>
            <Tab className="tabName">Video</Tab>
            <Tab className="tabName">Report</Tab>
            <Tab className="tabName">Code</Tab>
            <Tab className="tabName">Collaborators</Tab>
            <Tab className="tabName">Documentation</Tab>
            <Tab className="tabName">Discussion Forums</Tab>
          </TabList>

          <TabPanel className="tabPanel about">
            <div className="aboutDiv">
              <div className="leftAboutDiv">
                <div className="abstractInfo">
                  <h3>Abstract</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor 
                  recusandae quibusdam asperiores dolore magni debitis dicta, temporibus 
                  facilis ducimus inventore dolorum a est aspernatur culpa ea deleniti, 
                  dolores vero consectetur, maxime sed fugit! Fuga voluptates eveniet 
                  doloremque vero veniam dolores sapiente quam incidunt inventore tempore 
                  fugit voluptatem dolore placeat consequatur sunt quas nemo eaque 
                  laudantium quia, odit, commodi ipsum corporis ad? Reprehenderit deleniti 
                  deserunt cum, nobis ex exercitationem ipsum at veniam omnis velit illum 
                  dignissimos quas animi quo culpa eos reiciendis et, enim magnam sed, quia
                  obcaecati commodi? Labore iste non eveniet animi nesciunt quos saepe 
                  voluptates doloremque expedita! </p>
                </div>
                <div className="deploymentsInfo">
                  <h3>Deployments</h3>
                  <div className="links">
                    <p>
                      GitHub - 
                      <a href='#'> www.github.com</a>
                    </p>
                    <p>
                      GitHub - 
                      <a href='#'> www.github.com</a>
                    </p>
                    <p>
                      GitHub - 
                      <a href='#'> www.github.com</a>
                    </p>
                  </div>
                  
                </div>
                <div className="langsInfo">
                <h3>Technical Stack</h3>
                
                  <figure class="pie-chart">
                    <h2>Languages used to develop the software</h2>
                    <figcaption>
                     Javascript<span style={{"color":"#edc949"}}></span><br/>
                      HTML<span style={{"color":"#e15759"}} ></span><br/>
                      CSS<span style={{"color":"#f28e2c"}} ></span><br/>
                      PHP<span style={{"color":"#4e79a7"}} ></span><br/>
                      
                    </figcaption>
                    <cite>Technical Stack</cite>
                  </figure>
                </div>
                
              </div>
              <div className="rightAboutDiv">
              <h2 style={{"letterSpacing":"2px"}}>INFO</h2>
                <div className="starsDiv">
                  <AiOutlineStar size="1.2em"/>
                  <p>3 stars</p>
                </div>
                <div className="watchingDiv">
                  <BsEye size="1.2em"/>
                  <p> 1 watching</p>
                </div>
                <div className="downloadsDiv">
                  <LiaDownloadSolid size="1.2em"/>
                  <p> 4 downloads</p>
                </div>
                <div className="liveDiv">
                  <BiLink size="1.2em"/>
                  <p> www.vercel.app</p>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel className="tabPanel video">
            <video width="750" height="400" controls 
              src={video} type="video/mp4">
            </video>
            <div className="descVideo">
              <h2>Description</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maiores nihil odit deleniti explicabo distinctio mollitia voluptates. Nostrum molestiae repellendus quaerat consectetur sint hic dignissimos similique minima nihil excepturi, beatae, omnis et. Veritatis, minus rem quibusdam dolor necessitatibus suscipit accusantium odit tempore dolorum deserunt quos perferendis quam, est expedita vel, illo corrupti quidem dolorem. Expedita, qui optio! Necessitatibus mollitia obcaecati libero dolorum eveniet eos ipsum est reprehenderit tenetur facere architecto, itaque inventore nihil expedita ea.</p>
            </div>
          </TabPanel>
          <TabPanel className="tabPanel report">
          <div>
            <h4>REPORT</h4>
            <iframe src="https://docs.google.com/viewer?url=http://www.pdf995.com/samples/pdf.pdf&embedded=true" frameborder="0" height="500px" width="100%"></iframe>
          </div>
          </TabPanel>
          <TabPanel className="tabPanel code">
            <h2>Any content 4</h2>
          </TabPanel>
          <TabPanel className="tabPanel collaborators">
            <div className="collab">
              <div className="profileCard">
                <div className="imgCard">
                  <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"/>
                </div>
                <div className="nameCard">
                  <h2>Ethan Rivers</h2>
                </div>
                <div className="professCard">
                  <p>UI/UX Designer</p>
                </div>
                <div className="aboutCard">
                  <p>Lorem ipsum , sit amet sit sit amet  sit adipisicing elit. Quis fugiat totam mollitia, ipsa a officia </p>
                </div>
                <div className="iconsSection">
                  <div className="iconSec"> 
                    <AiOutlineLinkedin size="1.5em"/>
                  </div>
                  <div className="iconSec">
                    <FiTwitter size="1.5em"/>
                  </div>
                  <div className="iconSec">
                    <BsInstagram size="1.5em"/>
                  </div>
                  <div className="iconSec">
                    <BiLogoFacebookCircle size="1.5em"/>
                  </div>
                </div>
                <div className="buttonsConnect">
                  <button className="FollowMe">
                    FOLLOW
                  </button>
                  <button className="MessageMe">
                    MESSAGE
                  </button>
                </div>
              </div>
              <div className="profileCard">
                <div className="imgCard">
                  <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"/>
                </div>
                <div className="nameCard">
                  <h2>Ethan Rivers</h2>
                </div>
                <div className="professCard">
                  <p>UI/UX Designer</p>
                </div>
                <div className="aboutCard">
                  <p>Lorem ipsum , sit amet sit sit amet  sit adipisicing elit. Quis fugiat totam mollitia, ipsa a officia </p>
                </div>
                <div className="iconsSection">
                  <div className="iconSec"> 
                    <AiOutlineLinkedin size="1.5em"/>
                  </div>
                  <div className="iconSec">
                    <FiTwitter size="1.5em"/>
                  </div>
                  <div className="iconSec">
                    <BsInstagram size="1.5em"/>
                  </div>
                  <div className="iconSec">
                    <BiLogoFacebookCircle size="1.5em"/>
                  </div>
                </div>
                <div className="buttonsConnect">
                  <button className="FollowMe">
                    FOLLOW
                  </button>
                  <button className="MessageMe">
                    MESSAGE
                  </button>
                </div>
              </div>
              <div className="profileCard">
                <div className="imgCard">
                  <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"/>
                </div>
                <div className="nameCard">
                  <h2>Ethan Rivers</h2>
                </div>
                <div className="professCard">
                  <p>UI/UX Designer</p>
                </div>
                <div className="aboutCard">
                  <p>Lorem ipsum , sit amet sit sit amet  sit adipisicing elit. Quis fugiat totam mollitia, ipsa a officia </p>
                </div>
                <div className="iconsSection">
                  <div className="iconSec"> 
                    <AiOutlineLinkedin size="1.5em"/>
                  </div>
                  <div className="iconSec">
                    <FiTwitter size="1.5em"/>
                  </div>
                  <div className="iconSec">
                    <BsInstagram size="1.5em"/>
                  </div>
                  <div className="iconSec">
                    <BiLogoFacebookCircle size="1.5em"/>
                  </div>
                </div>
                <div className="buttonsConnect">
                  <button className="FollowMe">
                    FOLLOW
                  </button>
                  <button className="MessageMe">
                    MESSAGE
                  </button>
                </div>
              </div>

              

      
            </div>
          </TabPanel>
          <TabPanel className="tabPanel documentation">
            <h2>Any content 6</h2>
          </TabPanel >
          <TabPanel className="tabPanel discforum">
              <div className="forum">
                <div className="commentsSec">
                  <div className="commentBody">
                    <div className="commentHeader">
                      <img src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"/>
                      <h3>Aakash Rajpurohit</h3>
                      <p>2d</p>
                    </div>
                    <div className="commentPara">
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio iusto quia tempore ut minus nihil blanditiis enim quo, fugiat voluptatum aperiam nesciunt, repellat commodi, quisquam dolore laudantium ab? Laborum libero aut delectus molestiae. Magni, ex!</p>
                    </div>
                  </div>
                  <div className="commentBody replyComment">
                    <div className="commentHeader">
                    <BsFillReplyAllFill/>
                      <img src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"/>
                      <h3>Pravin Sharma</h3>
                      <p>1d</p>
                    </div>
                    <div className="commentPara">
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio iusto quia tempore ut minus nihil blanditiis enim quo, fugiat voluptatum aperiam nesciunt, repellat commodi, quisquam dolore laudantium ab? Laborum libero aut delectus molestiae. Magni, ex!</p>
                    </div>
                  </div>
                  <div className="commentBody">
                    <div className="commentHeader">
                      <img src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"/>
                      <h3>Niyati Shetty</h3>
                      <p>3d</p>
                    </div>
                    <div className="commentPara">
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio iusto quia tempore ut minus nihil blanditiis enim quo, fugiat voluptatum aperiam nesciunt, repellat commodi, quisquam dolore laudantium ab? Laborum libero aut delectus molestiae. Magni, ex!</p>
                    </div>
                  </div>
                </div>
                <div className="writeComment">
                  {/* <p>Write A comment</p> */}
                  <input type="text" className="comment" placeholder="Write a Comment . . ."/>
                </div>
              </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

export default StudentSingleProject
