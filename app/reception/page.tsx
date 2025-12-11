'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import PageHeader from '@/components/PageHeader'
import ToggleSwitch from '@/components/ToggleSwitch'
import Tooltip from '@/components/Tooltip'
import ScrollableContainer from '@/components/ScrollableContainer'
import ListItem from '@/components/ListItem'

export default function ReceptionPage() {
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  return (
    <>
      <main className='C007'>
        <PageHeader title='원무' />
        <aside className='C013'></aside>
        <article className='C020'>
          <section className='C021'>
            <div className='C028'>
              <p className='T007'>고객 현황</p>
              <div className='C022'>
                <div className='C017 styleSheet isIcon isMagnifier'></div>
                <p className='T005'>고객 통합 검색</p>
              </div>
              <div className='C023'>
                <div className='C019 styleSheet isIcon isCheck'></div>
                <p className='T008'>설문지 & 바코드 고객 검색</p>
              </div>
              <div className='C023'>
                <div className='C019 styleSheet isIcon isSignUp'></div>
                <p className='T008'>고객 직접 등록</p>
              </div>
              <div className='C024'>
                <p className='T009'>화면 크기:</p>
                <ToggleSwitch
                  onLabel='큰 화면'
                  offLabel='작은 화면'
                  value={!isSmallScreen}
                  onChange={(isOn) => {
                    setIsSmallScreen(!isOn)
                  }}
                />
              </div>
            </div>
            <div className={`C029 ${isSmallScreen ? 'isSmall' : 'isBig'}`}>
              <div className='C030'>
                <div className='C031'>
                  <div className='C032'>
                    <div className='C036'>
                      <div className='C033 isIcon styleSheet isAlarmClock'></div>
                    </div>
                    <p className='T011'>예약</p>
                    <p className='T012'>대기: <span className='isValue isBlack'>4</span>명 / 지연: <span className='isValue isRed'>1</span>명</p>
                  </div>
                  <ScrollableContainer>
                    <ListItem>
                      <Tooltip text='고객 상세 정보'>
                        <div className='C035'>
                          <p className='T013'>신수빈</p>
                          <p className='T014 isRed'>여성</p>
                          <p className='T014'>32<span className='isUnit'>세</span></p>
                          <p className='T014'>1<span className='isUnit'>기</span></p>
                          <p className='T015'>210047938</p>
                        </div>
                      </Tooltip>
                      <div className='C037'>
                        <p className='T016'><span className='isUnit'>AM</span> 10:30 예정</p>
                        <p className='T017'>시술 신환 상담</p>
                        <Tooltip text='업무 일정 보기'><div className='C039'><div className='C040'></div><p className='T018'>김유정<span className='isUnit'>상담사</span></p></div></Tooltip>
                      </div>
                    </ListItem>
                    <ListItem>
                      <Tooltip text='고객 상세 정보'>
                        <div className='C035'>
                          <p className='T013'>신수빈</p>
                          <p className='T014 isRed'>여성</p>
                          <p className='T014'>32<span className='isUnit'>세</span></p>
                          <p className='T014'>1<span className='isUnit'>기</span></p>
                          <p className='T015'>210047938</p>
                        </div>
                      </Tooltip>
                      <div className='C037'>
                        <p className='T016'><span className='isUnit'>AM</span> 10:30 예정</p>
                        <p className='T017'>시술 신환 상담</p>
                        <Tooltip text='업무 일정 보기'><div className='C039'><div className='C040'></div><p className='T018'>김유정<span className='isUnit'>상담사</span></p></div></Tooltip>
                      </div>
                    </ListItem>
                    <ListItem>
                      <Tooltip text='고객 상세 정보'>
                        <div className='C035'>
                          <p className='T013'>신수빈</p>
                          <p className='T014 isRed'>여성</p>
                          <p className='T014'>32<span className='isUnit'>세</span></p>
                          <p className='T014'>1<span className='isUnit'>기</span></p>
                          <p className='T015'>210047938</p>
                        </div>
                      </Tooltip>
                      <div className='C037'>
                        <p className='T016'><span className='isUnit'>AM</span> 10:30 예정</p>
                        <p className='T017'>시술 신환 상담</p>
                        <Tooltip text='업무 일정 보기'><div className='C039'><div className='C040'></div><p className='T018'>김유정<span className='isUnit'>상담사</span></p></div></Tooltip>
                      </div>
                    </ListItem>
                    <ListItem>
                      <Tooltip text='고객 상세 정보'>
                        <div className='C035'>
                          <p className='T013'>신수빈</p>
                          <p className='T014 isRed'>여성</p>
                          <p className='T014'>32<span className='isUnit'>세</span></p>
                          <p className='T014'>1<span className='isUnit'>기</span></p>
                          <p className='T015'>210047938</p>
                        </div>
                      </Tooltip>
                      <div className='C037'>
                        <p className='T016'><span className='isUnit'>AM</span> 10:30 예정</p>
                        <p className='T017'>시술 신환 상담</p>
                        <Tooltip text='업무 일정 보기'><div className='C039'><div className='C040'></div><p className='T018'>김유정<span className='isUnit'>상담사</span></p></div></Tooltip>
                      </div>
                    </ListItem>
                    <ListItem>
                      <Tooltip text='고객 상세 정보'>
                        <div className='C035'>
                          <p className='T013'>신수빈</p>
                          <p className='T014 isRed'>여성</p>
                          <p className='T014'>32<span className='isUnit'>세</span></p>
                          <p className='T014'>1<span className='isUnit'>기</span></p>
                          <p className='T015'>210047938</p>
                        </div>
                      </Tooltip>
                      <div className='C037'>
                        <p className='T016'><span className='isUnit'>AM</span> 10:30 예정</p>
                        <p className='T017'>시술 신환 상담</p>
                        <Tooltip text='업무 일정 보기'><div className='C039'><div className='C040'></div><p className='T018'>김유정<span className='isUnit'>상담사</span></p></div></Tooltip>
                      </div>
                    </ListItem>
                    <ListItem>
                      <Tooltip text='고객 상세 정보'>
                        <div className='C035'>
                          <p className='T013'>신수빈</p>
                          <p className='T014 isRed'>여성</p>
                          <p className='T014'>32<span className='isUnit'>세</span></p>
                          <p className='T014'>1<span className='isUnit'>기</span></p>
                          <p className='T015'>210047938</p>
                        </div>
                      </Tooltip>
                      <div className='C037'>
                        <p className='T016'><span className='isUnit'>AM</span> 10:30 예정</p>
                        <p className='T017'>시술 신환 상담</p>
                        <Tooltip text='업무 일정 보기'><div className='C039'><div className='C040'></div><p className='T018'>김유정<span className='isUnit'>상담사</span></p></div></Tooltip>
                      </div>
                    </ListItem>
                    <ListItem>
                      <Tooltip text='고객 상세 정보'>
                        <div className='C035'>
                          <p className='T013'>신수빈</p>
                          <p className='T014 isRed'>여성</p>
                          <p className='T014'>32<span className='isUnit'>세</span></p>
                          <p className='T014'>1<span className='isUnit'>기</span></p>
                          <p className='T015'>210047938</p>
                        </div>
                      </Tooltip>
                      <div className='C037'>
                        <p className='T016'><span className='isUnit'>AM</span> 10:30 예정</p>
                        <p className='T017'>시술 신환 상담</p>
                        <Tooltip text='업무 일정 보기'><div className='C039'><div className='C040'></div><p className='T018'>김유정<span className='isUnit'>상담사</span></p></div></Tooltip>
                      </div>
                    </ListItem>
                    <ListItem>
                      <Tooltip text='고객 상세 정보'>
                        <div className='C035'>
                          <p className='T013'>신수빈</p>
                          <p className='T014 isRed'>여성</p>
                          <p className='T014'>32<span className='isUnit'>세</span></p>
                          <p className='T014'>1<span className='isUnit'>기</span></p>
                          <p className='T015'>210047938</p>
                        </div>
                      </Tooltip>
                      <div className='C037'>
                        <p className='T016'><span className='isUnit'>AM</span> 10:30 예정</p>
                        <p className='T017'>시술 신환 상담</p>
                        <Tooltip text='업무 일정 보기'><div className='C039'><div className='C040'></div><p className='T018'>김유정<span className='isUnit'>상담사</span></p></div></Tooltip>
                      </div>
                    </ListItem>
                  </ScrollableContainer>
                </div>
                <div className='C031 isPending'>
                  <div className='C032'>
                    <div className='C036'>
                      <div className='C033 isIcon styleSheet isHourglass'></div>
                    </div>
                    <p className='T011'>보류</p>
                    <p className='T012'>접수: <span className='isValue isBlack'>4</span>명 / 보류: <span className='isValue isYellow'>1</span>명</p>
                  </div>
                  <ScrollableContainer>
                    <ListItem>
                      <Tooltip text='고객 상세 정보'>
                        <div className='C035'>
                          <p className='T013'>신수빈</p>
                          <p className='T014 isRed'>여성</p>
                          <p className='T014'>32<span className='isUnit'>세</span></p>
                          <p className='T014'>1<span className='isUnit'>기</span></p>
                          <p className='T015'>210047938</p>
                        </div>
                      </Tooltip>
                      <div className='C037'>
                        <p className='T016'><span className='isUnit'>AM</span> 10:30 접수</p>
                        <p className='T016 isGreen'><span className='isBold'>11분</span> 대기</p>
                        <p className='T019'>-합계:<span className='isBold isGreen'>11분</span></p>
                      </div>
                    </ListItem>
                    <ListItem>
                      <Tooltip text='고객 상세 정보'>
                        <div className='C035'>
                          <p className='T013'>신수빈</p>
                          <p className='T014 isRed'>여성</p>
                          <p className='T014'>32<span className='isUnit'>세</span></p>
                          <p className='T014'>1<span className='isUnit'>기</span></p>
                          <p className='T015'>210047938</p>
                        </div>
                      </Tooltip>
                      <div className='C037'>
                        <p className='T016'><span className='isUnit'>AM</span> 10:30 이관</p>
                        <p className='T016'><span className='isUnit'>from:</span> 진료파트</p>
                        <p className='T016 isYellow'><span className='isBold'>21분</span> 대기</p>
                        <p className='T019'>-합계:<span className='isBold isRed'>31분</span></p>
                      </div>
                    </ListItem>
                  </ScrollableContainer>
                </div>
                <div className='C031'>
                  <div className='C032'>
                    <div className='C036'>
                      <div className='C033 isIcon styleSheet isClinic'></div>
                    </div>
                    <p className='T011'>진료</p>
                    <p className='T012'>대기: <span className='isValue isBlack'>4</span>명 / 진행중: <span className='isValue isGreen'>1</span>명</p>
                  </div>
                  <ScrollableContainer>
                    <ListItem>
                      <Tooltip text='고객 상세 정보'>
                        <div className='C035'>
                          <p className='T013'>신수빈</p>
                          <p className='T014 isRed'>여성</p>
                          <p className='T014'>32<span className='isUnit'>세</span></p>
                          <p className='T014'>1<span className='isUnit'>기</span></p>
                          <p className='T015'>210047938</p>
                        </div>
                      </Tooltip>
                      <div className='C037'>
                        <p className='T016'><span className='isUnit'>AM</span> 10:30 예정</p>
                        <p className='T017'>시술 신환 상담</p>
                        <Tooltip text='업무 일정 보기'><div className='C039'><div className='C040'></div><p className='T018'>김유정<span className='isUnit'>상담사</span></p></div></Tooltip>
                      </div>
                    </ListItem>
                  </ScrollableContainer>
                </div>
                <div className='C031'>
                  <div className='C032'>
                    <div className='C036'>
                      <div className='C033 isIcon styleSheet isCoin'></div>
                    </div>
                    <p className='T011'>수납</p>
                    <p className='T012'>대기: <span className='isValue isBlack'>4</span>명 / 완료: <span className='isValue isBlue'>11</span>명</p>
                  </div>
                  <ScrollableContainer>
                    <ListItem>
                      <Tooltip text='고객 상세 정보'>
                        <div className='C035'>
                          <p className='T013'>신수빈</p>
                          <p className='T014 isRed'>여성</p>
                          <p className='T014'>32<span className='isUnit'>세</span></p>
                          <p className='T014'>1<span className='isUnit'>기</span></p>
                          <p className='T015'>210047938</p>
                        </div>
                      </Tooltip>
                      <div className='C037'>
                        <p className='T016'><span className='isUnit'>AM</span> 10:30 예정</p>
                        <p className='T017'>시술 신환 상담</p>
                        <Tooltip text='업무 일정 보기'><div className='C039'><div className='C040'></div><p className='T018'>김유정<span className='isUnit'>상담사</span></p></div></Tooltip>
                      </div>
                    </ListItem>
                  </ScrollableContainer>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Sidebar />
    </>
  )
}

