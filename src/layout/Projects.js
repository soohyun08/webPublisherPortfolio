// 연결된 컴포넌트
import ProjectsInner from "../components/ProjectsInner";
import Navigation from "../components/Navigation";
// data
import data from "../assets/DB/projectsData";

// 디자인
import "./projects.scss";
// img
import pinkSparkling from "../assets/images/pink-sparkling.png";
import GoUp from "../components/GoUp";

import Typewriter from "typewriter-effect";

function Projects() {
  return (
    <div className="tabContainer">
      <Navigation />
      <div className="projects">
        <div className="wrapper">
          <div className="greeting">
            <h1>
              <strong>반갑습니다!</strong>
              사용자의 편의와 <br />
              깔끔한 코드를 추구하는
              <Typewriter
                options={{
                  strings: ["웹 퍼블리셔,"],
                  autoStart: true,
                  loop: true,
                }}
              />
              김수현입니다.
            </h1>
          </div>

          <h2 className="headline">
            Works
            <img
              src={pinkSparkling}
              alt="핑크색 빤작이"
              className="pinkSparkling"
            />
          </h2>

          {data.map((item) => (
            <ProjectsInner key={item.id} item={item} />
          ))}
        </div>
      </div>

      <GoUp />
    </div>
  );
}

export default Projects;
