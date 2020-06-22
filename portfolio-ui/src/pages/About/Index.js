import React, { useEffect } from "react"
import "./index.css"
import TypeWrite from "../../components/TypeWriter/index"
import Section from "../../components/Section/index"

export default function About(){

    return (
        <div className="col container">
            <Section>
                <TypeWrite delay={160}>
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
                                      <TypeWrite delay={130}>
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
                </div>
            </div>
        </div>
    )
}