// 연결된 컴포넌트: 네비게이션
import Navigation from "../components/Navigation";
// data
import data from "../assets/DB/aboutData";
//디자인
import "./about.scss";
//이미지
import img from "../assets/images/gallery3.png";
import pinkSparkling from "../assets/images/pink-sparkling.png";
import GoUp from "../components/GoUp";

function About() {
  return (
    <div className="tabContainer">
      <Navigation />
      <div className="about">
        <div className="wrapper">
          <div className="intoduce">
            <figure className="imgWrapper">
              <img src={img} alt="pic" />
            </figure>

            <div className="txt">
              <p>
                우연히 디자인과 코딩의 매력을 알게 되었습니다. 정리정돈과
                편리함을 사랑하는 제가 몰입하고 즐길 수 있는 분야라고
                생각합니다.
              </p>
              <p>
                앞으로도 계속 도전하고 많은 경험을 쌓는 웹 퍼블리셔가
                되겠습니다.
              </p>

              <div className="tag">
                <span>#성실</span>
                <span>#끈기</span>
                <span>#책임감</span>
                <span>#몰입을_즐기는</span>
              </div>

              <button
                className="connect"
                onClick={() => {
                  window.open(
                    "https://github.com/soohyun08/resume2023/blob/main/resume.pdf"
                  );
                }}
              >
                let's connect
              </button>
            </div>
          </div>

          <div className="skill">
            <h2 className="headline">
              skill
              <img
                src={pinkSparkling}
                alt="핑크색 빤작이"
                className="pinkSparkling"
              />
            </h2>
            {data.map((item) => (
              <section key={item.id}>
                <h4>{item.name}</h4>
                <ul>
                  <li>{item.des1}</li>
                  <li>{item.des2}</li>
                  <li>{item.des3}</li>
                  <li>{item.des4}</li>
                  <li>{item.des5}</li>
                  <li>{item.des6}</li>
                  <li>{item.des7}</li>
                  <li>{item.des8}</li>
                  <li>{item.des9}</li>
                  <li>{item.des10}</li>
                </ul>
              </section>
            ))}
          </div>

          <div className="contact">
            <h4>kim soohyun</h4>
            <h5>010-6481-0829</h5>
            <h5>soohyun.k@outlook.com</h5>
          </div>
        </div>
      </div>

      <GoUp />
    </div>
  );
}

export default About;
