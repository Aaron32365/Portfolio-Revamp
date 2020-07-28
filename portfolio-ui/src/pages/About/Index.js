import React from "react"
import "./index.css"
import TypeWrite from "../../components/TypeWriter/index"
import Section from "../../components/Section/index"

export default function About(){

    return (
        <div className="col container">
            <Section>
                <TypeWrite delay={120}>
                    <div className=" col-12 header" id="aboutHeader">
                        About
                    </div>
                </TypeWrite>
            </Section>
            <div className="row justify-content-center">
                <div className="col-11 itemContainer">
                      <div className="row">
                          <div className="col">
                              <div className="row" id="skillsHeader">
                                  <Section>
                                      <TypeWrite delay={186}>
                                        Skills
                                      </TypeWrite>
                                  </Section>
                              </div>
                              <div className="row justify-content-center" id="skillsContainer">
                              <div className="tTip">
                                    <i class="devicon-html5-plain colored icons"></i>
                                      <div className="tTipText">
                                  <Section>
                                      <TypeWrite delay={80}>
                                        HTML5
                                      </TypeWrite>
                                  </Section>
                                      </div>
                                  </div>
                                  <div className="tTip">
                                    <i class="devicon-css3-plain colored icons"></i>
                                    <div className="tTipText">
                                  <Section>
                                      <TypeWrite delay={80}>
                                        CSS3
                                      </TypeWrite>
                                  </Section>
                                    </div>
                                </div>
                                <div className="tTip">
                                    <i class="devicon-javascript-plain colored icons"></i>
                                    <div className="tTipText">
                                  <Section>
                                      <TypeWrite delay={80}>
                                        JavaScript
                                      </TypeWrite>
                                  </Section>
                                    </div>
                                </div>
                                <div className="tTip">
                                    <i class="devicon-nodejs-plain colored icons"></i>
                                    <div className="tTipText">
                                  <Section>
                                      <TypeWrite delay={80}>
                                        NodeJS
                                      </TypeWrite>
                                  </Section>
                                    </div>
                                </div>
                                <div className="tTip">
                                    <i class="devicon-express-original colored icons"></i>
                                    <div className="tTipText">
                                  <Section>
                                      <TypeWrite delay={80}>
                                        ExpressJS
                                      </TypeWrite>
                                  </Section>
                                    </div>
                                </div>
                                <div className="tTip">
                                    <i class="devicon-jquery-plain colored icons"></i>
                                    <div className="tTipText">
                                  <Section>
                                      <TypeWrite delay={80}>
                                        jQuery
                                      </TypeWrite>
                                  </Section>
                                    </div>
                                </div>
                                <div className="tTip">
                                    <i class="devicon-mysql-plain colored icons"></i>
                                    <div className="tTipText">
                                  <Section>
                                      <TypeWrite delay={80}>
                                        MySQL
                                      </TypeWrite>
                                  </Section>
                                    </div>
                                </div>
                                <div className="tTip">
                                    <i class="devicon-mongodb-plain colored icons"></i>
                                    <div className="tTipText">
                                  <Section>
                                      <TypeWrite delay={80}>
                                        MongoDB
                                      </TypeWrite>
                                  </Section>
                                    </div>
                                </div>
                                <div className="tTip">
                                    <i class="devicon-python-plain colored icons"></i>
                                    <div className="tTipText">
                                  <Section>
                                      <TypeWrite delay={80}>
                                        Python
                                      </TypeWrite>
                                  </Section>
                                    </div>
                                </div>
                                <div className="tTip">
                                    <i class="devicon-cplusplus-plain colored icons"></i>
                                    <div className="tTipText">
                                  <Section>
                                      <TypeWrite delay={80}>
                                        C++
                                      </TypeWrite>
                                  </Section>
                                    </div>
                                </div>
                              </div>
                          </div>
                      </div>
                      <div className="row justify-content-center">
                          <div className="col-12 aboutContainer">
                            <div className="textHeader">
                                <Section>
                                    <TypeWrite delay={220}>
                                        Who is Aaron?
                                    </TypeWrite>
                                </Section>
                            </div>
                            <div className="aboutParagraph">
                                <Section>
                                    <TypeWrite delay={20}>
                                        I am a Full Stack Developer, Computer Science student, and Intelligence Analyst always looking for new opportunities to learn and grow as a developer, and as a person.
                                    </TypeWrite>
                                </Section>
                            </div>
                          </div>
                      </div>
                </div>
            </div>
        </div>
    )
}