export default function Desktop() {
  return (
    <div className="flex pr-[30px] items-start gap-[30px] bg-[#F6F6F6] min-w-screen min-h-screen absolute left-[106px] top-[149px] overflow-hidden">
      <div className="flex py-5 px-0 flex-col items-start gap-[30px] shrink-0 w-full h-full">
        <div className="flex py-0 px-[30px] justify-between items-center shrink-0 rounded-[10px] bg-[#FFF] w-full h-[105px]">
          <div className="flex flex-col items-start gap-[18px] w-fit">
            <p className="text-[#202020] font-cairo text-2xl font-bold w-fit">
              Товары
            </p>
          </div>
          <div className="flex justify-center items-center gap-[146px] w-[1890px] h-[100px]">
            <div className="flex py-3 px-5 items-center gap-2 shrink-0 rounded-lg bg-[#F3F3F3] w-[1023px]">
              <div className="shrink-0 w-6 h-6 overflow-hidden relative">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 absolute left-[3px] top-[3px] "
                >
                  <path
                    d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                    stroke="#999999"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-1 h-1 absolute left-[17px] top-[17px] "
                >
                  <path
                    d="M5.35 5.35L1 1"
                    stroke="#999999"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-[#999] font-inter text-sm leading-6 w-full">
                Найти{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-[30px] shrink-0 w-full h-[669px]">
          <div className="flex flex-col items-start gap-[30px] w-full h-[669px]">
            <div className="flex p-[30px] flex-col items-start gap-10 shrink-0 rounded-xl bg-[#FFF] w-full h-[669px]">
              <div className="flex justify-between items-center w-full">
                <p className="text-[#333] font-cairo text-xl font-bold leading-5 w-fit">
                  Все позиции
                </p>
                <div className="flex items-start gap-2 w-fit">
                  <div className="flex p-2.5 items-center gap-2 rounded-lg border border-[#ECECEB] bg-[#FFF] w-fit">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[22px] h-[22px] overflow-hidden relative "
                    >
                      <path
                        d="M16.9873 16.0162C17.1156 16.145 17.1876 16.3195 17.1876 16.5013C17.1876 16.6831 17.1156 16.8576 16.9873 16.9864C16.8936 17.0784 14.6798 19.25 11 19.25C7.7868 19.25 5.45445 17.325 4.125 15.8254V17.875C4.125 18.0573 4.05257 18.2322 3.92364 18.3611C3.7947 18.4901 3.61984 18.5625 3.4375 18.5625C3.25516 18.5625 3.0803 18.4901 2.95136 18.3611C2.82243 18.2322 2.75 18.0573 2.75 17.875V13.75C2.75 13.5677 2.82243 13.3928 2.95136 13.2639C3.0803 13.1349 3.25516 13.0625 3.4375 13.0625H7.5625C7.74484 13.0625 7.9197 13.1349 8.04864 13.2639C8.17757 13.3928 8.25 13.5677 8.25 13.75C8.25 13.9323 8.17757 14.1072 8.04864 14.2361C7.9197 14.3651 7.74484 14.4375 7.5625 14.4375H4.76437C5.82312 15.7566 7.99219 17.875 11 17.875C14.0938 17.875 15.9964 16.0308 16.0153 16.0119C16.1448 15.8836 16.3199 15.812 16.5022 15.8128C16.6844 15.8136 16.8589 15.8868 16.9873 16.0162ZM18.5625 3.4375C18.3802 3.4375 18.2053 3.50993 18.0764 3.63886C17.9474 3.7678 17.875 3.94266 17.875 4.125V6.17461C16.5455 4.675 14.2132 2.75 11 2.75C7.32016 2.75 5.10641 4.92164 5.01359 5.01359C4.88436 5.14237 4.81158 5.31721 4.81126 5.49964C4.81094 5.68208 4.8831 5.85718 5.01187 5.98641C5.14065 6.11564 5.31549 6.18842 5.49793 6.18874C5.68036 6.18906 5.85546 6.1169 5.98469 5.98813C6.00359 5.96922 7.90625 4.125 11 4.125C14.0078 4.125 16.1769 6.24336 17.2356 7.5625H14.4375C14.2552 7.5625 14.0803 7.63493 13.9514 7.76386C13.8224 7.8928 13.75 8.06766 13.75 8.25C13.75 8.43234 13.8224 8.6072 13.9514 8.73614C14.0803 8.86507 14.2552 8.9375 14.4375 8.9375H18.5625C18.7448 8.9375 18.9197 8.86507 19.0486 8.73614C19.1776 8.6072 19.25 8.43234 19.25 8.25V4.125C19.25 3.94266 19.1776 3.7678 19.0486 3.63886C18.9197 3.50993 18.7448 3.4375 18.5625 3.4375Z"
                        fill="#515161"
                      />
                    </svg>
                  </div>
                  <div className="flex min-h-[42px] py-2.5 px-5 items-center gap-[15px] rounded-md bg-[#242EDB] w-fit overflow-hidden">
                    <div className="flex items-center gap-[15px] w-fit">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[22px] h-[22px] overflow-hidden relative "
                      >
                        <path
                          d="M11 2.0625C9.23233 2.0625 7.50436 2.58668 6.03459 3.56874C4.56483 4.55081 3.41929 5.94665 2.74283 7.57977C2.06637 9.21288 1.88938 11.0099 2.23424 12.7436C2.57909 14.4773 3.43031 16.0698 4.68024 17.3198C5.93017 18.5697 7.52268 19.4209 9.25638 19.7658C10.9901 20.1106 12.7871 19.9336 14.4202 19.2572C16.0534 18.5807 17.4492 17.4352 18.4313 15.9654C19.4133 14.4956 19.9375 12.7677 19.9375 11C19.935 8.6304 18.9926 6.35856 17.317 4.683C15.6414 3.00743 13.3696 2.065 11 2.0625ZM11 18.5625C9.50428 18.5625 8.04215 18.119 6.7985 17.288C5.55486 16.457 4.58555 15.2759 4.01316 13.894C3.44078 12.5122 3.29101 10.9916 3.58282 9.52463C3.87462 8.05765 4.59487 6.71014 5.65251 5.65251C6.71014 4.59487 8.05765 3.87461 9.52463 3.58281C10.9916 3.29101 12.5122 3.44077 13.894 4.01316C15.2759 4.58555 16.457 5.55485 17.288 6.7985C18.119 8.04215 18.5625 9.50428 18.5625 11C18.5602 13.005 17.7627 14.9272 16.345 16.345C14.9272 17.7627 13.005 18.5602 11 18.5625ZM15.125 11C15.125 11.1823 15.0526 11.3572 14.9236 11.4861C14.7947 11.6151 14.6198 11.6875 14.4375 11.6875H11.6875V14.4375C11.6875 14.6198 11.6151 14.7947 11.4861 14.9236C11.3572 15.0526 11.1823 15.125 11 15.125C10.8177 15.125 10.6428 15.0526 10.5139 14.9236C10.3849 14.7947 10.3125 14.6198 10.3125 14.4375V11.6875H7.5625C7.38017 11.6875 7.2053 11.6151 7.07637 11.4861C6.94744 11.3572 6.875 11.1823 6.875 11C6.875 10.8177 6.94744 10.6428 7.07637 10.5139C7.2053 10.3849 7.38017 10.3125 7.5625 10.3125H10.3125V7.5625C10.3125 7.38016 10.3849 7.2053 10.5139 7.07636C10.6428 6.94743 10.8177 6.875 11 6.875C11.1823 6.875 11.3572 6.94743 11.4861 7.07636C11.6151 7.2053 11.6875 7.38016 11.6875 7.5625V10.3125H14.4375C14.6198 10.3125 14.7947 10.3849 14.9236 10.5139C15.0526 10.6428 15.125 10.8177 15.125 11Z"
                          fill="white"
                        />
                      </svg>
                      <p className="text-[#EBF3EA] font-cairo text-sm font-semibold w-fit">
                        Добавить
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start w-full">
                <div className="flex py-0 px-[18px] items-center gap-[79px] w-full h-[73px]">
                  <div className="flex py-px px-0 items-center gap-5 w-[278px]">
                    <div className="shrink-0 rounded border border-[#B2B3B9] w-[22px] h-[22px]"></div>
                    <p className="text-[#B2B3B9] font-cairo text-base font-bold w-fit">
                      Наименование
                    </p>
                  </div>
                  <button className="cursor-pointer text-nowrap flex justify-center items-center gap-[150px] w-[1218px] h-[11px]">
                    <p className="shrink-0 text-[#B2B3B9] font-cairo text-base font-bold w-[125px] text-center">
                      Вендор
                    </p>
                    <p className="shrink-0 text-[#B2B3B9] font-cairo text-base font-bold w-[125px] text-center">
                      Артикул
                    </p>
                    <p className="shrink-0 text-[#B2B3B9] font-cairo text-base font-bold w-[125px] text-center">
                      Оценка
                    </p>
                    <p className="shrink-0 text-[#B2B3B9] font-cairo text-base font-bold w-[125px] text-center">
                      Цена, ₽
                    </p>
                  </button>
                </div>
                <div className="flex flex-col items-start border-t border-t-[#E2E2E2] border-b border-b-[#E2E2E2] w-full">
                  <div className="flex py-0 px-[18px] items-center gap-[215px] w-full h-[71px] overflow-hidden">
                    <div className="flex items-center gap-[18px] w-[278px]">
                      <div className="flex p-2.5 justify-center items-center gap-2.5 shrink-0 rounded border border-[#B2B3B9] bg-[#FFF] w-[22px] h-[22px]"></div>
                      <div className="shrink-0 rounded-lg border border-[#ECECEB] bg-[#C4C4C4] w-12 h-12"></div>
                      <div className="flex flex-col items-start gap-2.5 shrink-0 w-[210px]">
                        <p className="text-[#161919] font-cairo text-base font-bold w-fit">
                          USB Флэшкарта 16GB
                        </p>
                        <p className="text-[#B2B3B9] font-cairo text-sm w-fit">
                          Аксессуары
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-[132px] w-[1486px]">
                      <p className="shrink-0 text-[#000] font-openSans text-base font-bold w-[125px] h-2.5 text-center">
                        Samsung
                      </p>
                      <p className="shrink-0 text-[#000] font-openSans text-base w-40 h-2.5 text-center">
                        RCH45Q1A
                      </p>
                      <p className="shrink-0 text-[#000] font-openSans text-base w-[125px] h-2.5 text-center">
                        4.3&#x2F;5
                      </p>
                      <p className="shrink-0 text-[#999] font-robotoMono text-base leading-[1.1em] w-40 text-center">
                        48 652,00
                      </p>
                      <div className="flex justify-center items-center gap-8 shrink-0 w-[133px]">
                        <div className="flex p-1 justify-center items-center gap-2.5 shrink-0 rounded-[23px] bg-[#242EDB] w-[52px] h-[27px]">
                          <div className="shrink-0 w-6 h-6 overflow-hidden relative">
                            <svg
                              width="2"
                              height="16"
                              viewBox="0 0 2 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3.5 absolute left-3 top-[5px] "
                            >
                              <path
                                d="M1 1V15"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <svg
                              width="16"
                              height="2"
                              viewBox="0 0 16 2"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-3.5 absolute left-[5px] top-3 "
                            >
                              <path
                                d="M1 1H15"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0 w-8 h-8 overflow-hidden relative "
                        >
                          <path
                            d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM16 27C13.8244 27 11.6977 26.3549 9.88873 25.1462C8.07979 23.9375 6.66989 22.2195 5.83733 20.2095C5.00477 18.1995 4.78693 15.9878 5.21137 13.854C5.63581 11.7202 6.68345 9.7602 8.22183 8.22183C9.76021 6.68345 11.7202 5.6358 13.854 5.21136C15.9878 4.78692 18.1995 5.00476 20.2095 5.83733C22.2195 6.66989 23.9375 8.07979 25.1462 9.88873C26.3549 11.6977 27 13.8244 27 16C26.9967 18.9164 25.8367 21.7123 23.7745 23.7745C21.7123 25.8367 18.9164 26.9967 16 27ZM17.5 16C17.5 16.2967 17.412 16.5867 17.2472 16.8334C17.0824 17.08 16.8481 17.2723 16.574 17.3858C16.2999 17.4993 15.9983 17.5291 15.7074 17.4712C15.4164 17.4133 15.1491 17.2704 14.9393 17.0607C14.7296 16.8509 14.5867 16.5836 14.5288 16.2926C14.471 16.0017 14.5007 15.7001 14.6142 15.426C14.7277 15.1519 14.92 14.9176 15.1667 14.7528C15.4133 14.588 15.7033 14.5 16 14.5C16.3978 14.5 16.7794 14.658 17.0607 14.9393C17.342 15.2206 17.5 15.6022 17.5 16ZM23 16C23 16.2967 22.912 16.5867 22.7472 16.8334C22.5824 17.08 22.3481 17.2723 22.074 17.3858C21.7999 17.4993 21.4983 17.5291 21.2074 17.4712C20.9164 17.4133 20.6491 17.2704 20.4393 17.0607C20.2296 16.8509 20.0867 16.5836 20.0288 16.2926C19.9709 16.0017 20.0007 15.7001 20.1142 15.426C20.2277 15.1519 20.42 14.9176 20.6667 14.7528C20.9133 14.588 21.2033 14.5 21.5 14.5C21.8978 14.5 22.2794 14.658 22.5607 14.9393C22.842 15.2206 23 15.6022 23 16ZM12 16C12 16.2967 11.912 16.5867 11.7472 16.8334C11.5824 17.08 11.3481 17.2723 11.074 17.3858C10.7999 17.4993 10.4983 17.5291 10.2074 17.4712C9.9164 17.4133 9.64912 17.2704 9.43935 17.0607C9.22957 16.8509 9.08671 16.5836 9.02883 16.2926C8.97095 16.0017 9.00065 15.7001 9.11419 15.426C9.22772 15.1519 9.41998 14.9176 9.66665 14.7528C9.91332 14.588 10.2033 14.5 10.5 14.5C10.8978 14.5 11.2794 14.658 11.5607 14.9393C11.842 15.2206 12 15.6022 12 16Z"
                            fill="#B2B3B9"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start border-t border-t-[#E2E2E2] border-b border-b-[#E2E2E2] w-full">
                  <div className="flex py-0 px-[18px] items-center gap-[215px] w-full h-[71px] overflow-hidden">
                    <div className="flex items-center gap-[18px] w-[278px]">
                      <div className="flex p-2.5 justify-center items-center gap-2.5 shrink-0 rounded border border-[#B2B3B9] bg-[#FFF] w-[22px] h-[22px]"></div>
                      <div className="shrink-0 rounded-lg border border-[#ECECEB] bg-[#C4C4C4] w-12 h-12"></div>
                      <div className="flex flex-col items-start gap-2.5 shrink-0 w-[210px]">
                        <p className="text-[#222] font-cairo text-base font-bold w-fit">
                          Утюг Braun TexStyle 9
                        </p>
                        <p className="text-[#B2B3B9] font-cairo text-sm w-fit">
                          Бытовая техника
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-[132px] w-[1486px]">
                      <p className="shrink-0 text-[#000] font-openSans text-base font-bold w-[125px] h-2.5 text-center">
                        TexStyle
                      </p>
                      <p className="shrink-0 text-[#000] font-openSans text-base w-40 h-2.5 text-center">
                        DFCHQ1A
                      </p>
                      <p className="shrink-0 text-[#000] font-openSans text-base w-[125px] h-2.5 text-center">
                        4.9&#x2F;5
                      </p>
                      <p className="shrink-0 text-[#999] font-robotoMono text-base leading-[1.1em] w-40 text-center">
                        4 233,00
                      </p>
                      <div className="flex justify-center items-center gap-8 shrink-0 w-[133px]">
                        <div className="flex p-1 justify-center items-center gap-2.5 shrink-0 rounded-[23px] bg-[#242EDB] w-[52px] h-[27px]">
                          <div className="shrink-0 w-6 h-6 overflow-hidden relative">
                            <svg
                              width="2"
                              height="16"
                              viewBox="0 0 2 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3.5 absolute left-3 top-[5px] "
                            >
                              <path
                                d="M1 1V15"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <svg
                              width="16"
                              height="2"
                              viewBox="0 0 16 2"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-3.5 absolute left-[5px] top-3 "
                            >
                              <path
                                d="M1 1H15"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0 w-8 h-8 overflow-hidden relative "
                        >
                          <path
                            d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM16 27C13.8244 27 11.6977 26.3549 9.88873 25.1462C8.07979 23.9375 6.66989 22.2195 5.83733 20.2095C5.00477 18.1995 4.78693 15.9878 5.21137 13.854C5.63581 11.7202 6.68345 9.7602 8.22183 8.22183C9.76021 6.68345 11.7202 5.6358 13.854 5.21136C15.9878 4.78692 18.1995 5.00476 20.2095 5.83733C22.2195 6.66989 23.9375 8.07979 25.1462 9.88873C26.3549 11.6977 27 13.8244 27 16C26.9967 18.9164 25.8367 21.7123 23.7745 23.7745C21.7123 25.8367 18.9164 26.9967 16 27ZM17.5 16C17.5 16.2967 17.412 16.5867 17.2472 16.8334C17.0824 17.08 16.8481 17.2723 16.574 17.3858C16.2999 17.4993 15.9983 17.5291 15.7074 17.4712C15.4164 17.4133 15.1491 17.2704 14.9393 17.0607C14.7296 16.8509 14.5867 16.5836 14.5288 16.2926C14.471 16.0017 14.5007 15.7001 14.6142 15.426C14.7277 15.1519 14.92 14.9176 15.1667 14.7528C15.4133 14.588 15.7033 14.5 16 14.5C16.3978 14.5 16.7794 14.658 17.0607 14.9393C17.342 15.2206 17.5 15.6022 17.5 16ZM23 16C23 16.2967 22.912 16.5867 22.7472 16.8334C22.5824 17.08 22.3481 17.2723 22.074 17.3858C21.7999 17.4993 21.4983 17.5291 21.2074 17.4712C20.9164 17.4133 20.6491 17.2704 20.4393 17.0607C20.2296 16.8509 20.0867 16.5836 20.0288 16.2926C19.9709 16.0017 20.0007 15.7001 20.1142 15.426C20.2277 15.1519 20.42 14.9176 20.6667 14.7528C20.9133 14.588 21.2033 14.5 21.5 14.5C21.8978 14.5 22.2794 14.658 22.5607 14.9393C22.842 15.2206 23 15.6022 23 16ZM12 16C12 16.2967 11.912 16.5867 11.7472 16.8334C11.5824 17.08 11.3481 17.2723 11.074 17.3858C10.7999 17.4993 10.4983 17.5291 10.2074 17.4712C9.9164 17.4133 9.64912 17.2704 9.43935 17.0607C9.22957 16.8509 9.08671 16.5836 9.02883 16.2926C8.97095 16.0017 9.00065 15.7001 9.11419 15.426C9.22772 15.1519 9.41998 14.9176 9.66665 14.7528C9.91332 14.588 10.2033 14.5 10.5 14.5C10.8978 14.5 11.2794 14.658 11.5607 14.9393C11.842 15.2206 12 15.6022 12 16Z"
                            fill="#B2B3B9"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start border-t border-t-[#E2E2E2] border-b border-b-[#E2E2E2] w-fit">
                  <div className="flex items-center gap-[15px] w-fit h-[71px] overflow-hidden">
                    <div className="bg-[#3C538E] w-[3px] h-[69px]"></div>
                    <div className="flex items-center gap-[18px] w-fit">
                      <div className="flex p-2.5 justify-center items-center gap-2.5 rounded border border-[#B2B3B9] bg-[#3C538E] w-[22px] h-[22px]"></div>
                      <div className="rounded-lg border border-[#ECECEB] bg-[#C4C4C4] w-12 h-12"></div>
                      <div className="flex flex-col items-start gap-2.5 w-[210px]">
                        <p className="text-[#222] font-cairo text-base font-bold w-fit">
                          Смартфон Apple iPhone 17
                        </p>
                        <p className="text-[#B2B3B9] font-cairo text-sm w-fit">
                          Телефоны
                        </p>
                      </div>
                    </div>
                    <div className="flex py-0 px-[163px] items-center gap-[132px] w-[1486px]">
                      <p className="shrink-0 text-[#000] font-openSans text-base font-bold w-[125px] h-2.5 text-center">
                        Apple
                      </p>
                      <p className="shrink-0 text-[#000] font-openSans text-base w-40 h-2.5 text-center">
                        GUYHD2-X4
                      </p>
                      <p className="shrink-0 text-[#000] font-openSans text-base w-[125px] h-2.5 text-center">
                        4.7&#x2F;5
                      </p>
                      <p className="shrink-0 text-[#999] font-robotoMono text-base leading-[1.1em] w-40 text-center">
                        88 652,00
                      </p>
                      <div className="flex justify-center items-center gap-8 shrink-0 w-[133px]">
                        <div className="flex p-1 justify-center items-center gap-2.5 shrink-0 rounded-[23px] bg-[#242EDB] w-[52px] h-[27px]">
                          <div className="shrink-0 w-6 h-6 overflow-hidden relative">
                            <svg
                              width="2"
                              height="16"
                              viewBox="0 0 2 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3.5 absolute left-3 top-[5px] "
                            >
                              <path
                                d="M1 1V15"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <svg
                              width="16"
                              height="2"
                              viewBox="0 0 16 2"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-3.5 absolute left-[5px] top-3 "
                            >
                              <path
                                d="M1 1H15"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0 w-8 h-8 overflow-hidden relative "
                        >
                          <path
                            d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM16 27C13.8244 27 11.6977 26.3549 9.88873 25.1462C8.07979 23.9375 6.66989 22.2195 5.83733 20.2095C5.00477 18.1995 4.78693 15.9878 5.21137 13.854C5.63581 11.7202 6.68345 9.7602 8.22183 8.22183C9.76021 6.68345 11.7202 5.6358 13.854 5.21136C15.9878 4.78692 18.1995 5.00476 20.2095 5.83733C22.2195 6.66989 23.9375 8.07979 25.1462 9.88873C26.3549 11.6977 27 13.8244 27 16C26.9967 18.9164 25.8367 21.7123 23.7745 23.7745C21.7123 25.8367 18.9164 26.9967 16 27ZM17.5 16C17.5 16.2967 17.412 16.5867 17.2472 16.8334C17.0824 17.08 16.8481 17.2723 16.574 17.3858C16.2999 17.4993 15.9983 17.5291 15.7074 17.4712C15.4164 17.4133 15.1491 17.2704 14.9393 17.0607C14.7296 16.8509 14.5867 16.5836 14.5288 16.2926C14.471 16.0017 14.5007 15.7001 14.6142 15.426C14.7277 15.1519 14.92 14.9176 15.1667 14.7528C15.4133 14.588 15.7033 14.5 16 14.5C16.3978 14.5 16.7794 14.658 17.0607 14.9393C17.342 15.2206 17.5 15.6022 17.5 16ZM23 16C23 16.2967 22.912 16.5867 22.7472 16.8334C22.5824 17.08 22.3481 17.2723 22.074 17.3858C21.7999 17.4993 21.4983 17.5291 21.2074 17.4712C20.9164 17.4133 20.6491 17.2704 20.4393 17.0607C20.2296 16.8509 20.0867 16.5836 20.0288 16.2926C19.9709 16.0017 20.0007 15.7001 20.1142 15.426C20.2277 15.1519 20.42 14.9176 20.6667 14.7528C20.9133 14.588 21.2033 14.5 21.5 14.5C21.8978 14.5 22.2794 14.658 22.5607 14.9393C22.842 15.2206 23 15.6022 23 16ZM12 16C12 16.2967 11.912 16.5867 11.7472 16.8334C11.5824 17.08 11.3481 17.2723 11.074 17.3858C10.7999 17.4993 10.4983 17.5291 10.2074 17.4712C9.9164 17.4133 9.64912 17.2704 9.43935 17.0607C9.22957 16.8509 9.08671 16.5836 9.02883 16.2926C8.97095 16.0017 9.00065 15.7001 9.11419 15.426C9.22772 15.1519 9.41998 14.9176 9.66665 14.7528C9.91332 14.588 10.2033 14.5 10.5 14.5C10.8978 14.5 11.2794 14.658 11.5607 14.9393C11.842 15.2206 12 15.6022 12 16Z"
                            fill="#B2B3B9"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start border-t border-t-[#E2E2E2] border-b border-b-[#E2E2E2] w-full">
                  <div className="flex py-0 px-[18px] items-center gap-[215px] w-full h-[71px] overflow-hidden">
                    <div className="flex items-center gap-[18px] w-[278px]">
                      <div className="flex p-2.5 justify-center items-center gap-2.5 shrink-0 rounded border border-[#B2B3B9] bg-[#FFF] w-[22px] h-[22px]"></div>
                      <div className="shrink-0 rounded-lg border border-[#ECECEB] bg-[#C4C4C4] w-12 h-12"></div>
                      <div className="flex flex-col items-start gap-2.5 shrink-0 w-[210px]">
                        <p className="text-[#222] font-cairo text-base font-bold w-fit">
                          Игровая консоль PlaySta...
                        </p>
                        <p className="text-[#B2B3B9] font-cairo text-sm w-fit">
                          Игровые приставки
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-[132px] w-[1486px]">
                      <p className="shrink-0 text-[#000] font-openSans text-base font-bold w-[125px] h-2.5 text-center">
                        Sony
                      </p>
                      <p className="shrink-0 text-[#000] font-openSans text-base w-40 h-2.5 text-center">
                        HT45Q21
                      </p>
                      <p className="shrink-0 text-[#000] font-openSans text-base w-[125px] h-2.5 text-center">
                        4.1&#x2F;5
                      </p>
                      <p className="shrink-0 text-[#999] font-robotoMono text-base leading-[1.1em] w-40 text-center">
                        56 236,00
                      </p>
                      <div className="flex justify-center items-center gap-8 shrink-0 w-[133px]">
                        <div className="flex p-1 justify-center items-center gap-2.5 shrink-0 rounded-[23px] bg-[#242EDB] w-[52px] h-[27px]">
                          <div className="shrink-0 w-6 h-6 overflow-hidden relative">
                            <svg
                              width="2"
                              height="16"
                              viewBox="0 0 2 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3.5 absolute left-3 top-[5px] "
                            >
                              <path
                                d="M1 1V15"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <svg
                              width="16"
                              height="2"
                              viewBox="0 0 16 2"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-3.5 absolute left-[5px] top-3 "
                            >
                              <path
                                d="M1 1H15"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0 w-8 h-8 overflow-hidden relative "
                        >
                          <path
                            d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM16 27C13.8244 27 11.6977 26.3549 9.88873 25.1462C8.07979 23.9375 6.66989 22.2195 5.83733 20.2095C5.00477 18.1995 4.78693 15.9878 5.21137 13.854C5.63581 11.7202 6.68345 9.7602 8.22183 8.22183C9.76021 6.68345 11.7202 5.6358 13.854 5.21136C15.9878 4.78692 18.1995 5.00476 20.2095 5.83733C22.2195 6.66989 23.9375 8.07979 25.1462 9.88873C26.3549 11.6977 27 13.8244 27 16C26.9967 18.9164 25.8367 21.7123 23.7745 23.7745C21.7123 25.8367 18.9164 26.9967 16 27ZM17.5 16C17.5 16.2967 17.412 16.5867 17.2472 16.8334C17.0824 17.08 16.8481 17.2723 16.574 17.3858C16.2999 17.4993 15.9983 17.5291 15.7074 17.4712C15.4164 17.4133 15.1491 17.2704 14.9393 17.0607C14.7296 16.8509 14.5867 16.5836 14.5288 16.2926C14.471 16.0017 14.5007 15.7001 14.6142 15.426C14.7277 15.1519 14.92 14.9176 15.1667 14.7528C15.4133 14.588 15.7033 14.5 16 14.5C16.3978 14.5 16.7794 14.658 17.0607 14.9393C17.342 15.2206 17.5 15.6022 17.5 16ZM23 16C23 16.2967 22.912 16.5867 22.7472 16.8334C22.5824 17.08 22.3481 17.2723 22.074 17.3858C21.7999 17.4993 21.4983 17.5291 21.2074 17.4712C20.9164 17.4133 20.6491 17.2704 20.4393 17.0607C20.2296 16.8509 20.0867 16.5836 20.0288 16.2926C19.9709 16.0017 20.0007 15.7001 20.1142 15.426C20.2277 15.1519 20.42 14.9176 20.6667 14.7528C20.9133 14.588 21.2033 14.5 21.5 14.5C21.8978 14.5 22.2794 14.658 22.5607 14.9393C22.842 15.2206 23 15.6022 23 16ZM12 16C12 16.2967 11.912 16.5867 11.7472 16.8334C11.5824 17.08 11.3481 17.2723 11.074 17.3858C10.7999 17.4993 10.4983 17.5291 10.2074 17.4712C9.9164 17.4133 9.64912 17.2704 9.43935 17.0607C9.22957 16.8509 9.08671 16.5836 9.02883 16.2926C8.97095 16.0017 9.00065 15.7001 9.11419 15.426C9.22772 15.1519 9.41998 14.9176 9.66665 14.7528C9.91332 14.588 10.2033 14.5 10.5 14.5C10.8978 14.5 11.2794 14.658 11.5607 14.9393C11.842 15.2206 12 15.6022 12 16Z"
                            fill="#B2B3B9"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start border-t border-t-[#E2E2E2] border-b border-b-[#E2E2E2] w-full">
                  <div className="flex py-0 px-[18px] items-center gap-[215px] w-full h-[71px] overflow-hidden">
                    <div className="flex items-center gap-[18px] w-[278px]">
                      <div className="flex p-2.5 justify-center items-center gap-2.5 shrink-0 rounded border border-[#B2B3B9] bg-[#FFF] w-[22px] h-[22px]"></div>
                      <div className="shrink-0 rounded-lg border border-[#ECECEB] bg-[#C4C4C4] w-12 h-12"></div>
                      <div className="flex flex-col items-start gap-2.5 shrink-0 w-[210px]">
                        <p className="text-[#222] font-cairo text-base font-bold w-fit">
                          Фен Dyson Supersonic Nural{" "}
                        </p>
                        <p className="text-[#B2B3B9] font-cairo text-sm w-fit">
                          Электроника
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-[132px] w-[1486px]">
                      <p className="shrink-0 text-[#000] font-openSans text-base font-bold w-[125px] text-center">
                        Dyson
                      </p>
                      <p className="shrink-0 text-[#000] font-openSans text-base w-40 h-2.5 text-center">
                        FJHHGF-CR4
                      </p>
                      <p className="shrink-0 text-[#000] font-openSans text-base w-[125px] h-2.5 text-center">
                        3.3&#x2F;5
                      </p>
                      <p className="shrink-0 text-[#999] font-robotoMono text-base leading-[1.1em] w-40 text-center">
                        48 652,00
                      </p>
                      <div className="flex justify-center items-center gap-8 shrink-0 w-[133px]">
                        <div className="flex p-1 justify-center items-center gap-2.5 shrink-0 rounded-[23px] bg-[#242EDB] w-[52px] h-[27px]">
                          <div className="shrink-0 w-6 h-6 overflow-hidden relative">
                            <svg
                              width="2"
                              height="16"
                              viewBox="0 0 2 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3.5 absolute left-3 top-[5px] "
                            >
                              <path
                                d="M1 1V15"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <svg
                              width="16"
                              height="2"
                              viewBox="0 0 16 2"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-3.5 absolute left-[5px] top-3 "
                            >
                              <path
                                d="M1 1H15"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0 w-8 h-8 overflow-hidden relative "
                        >
                          <path
                            d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM16 27C13.8244 27 11.6977 26.3549 9.88873 25.1462C8.07979 23.9375 6.66989 22.2195 5.83733 20.2095C5.00477 18.1995 4.78693 15.9878 5.21137 13.854C5.63581 11.7202 6.68345 9.7602 8.22183 8.22183C9.76021 6.68345 11.7202 5.6358 13.854 5.21136C15.9878 4.78692 18.1995 5.00476 20.2095 5.83733C22.2195 6.66989 23.9375 8.07979 25.1462 9.88873C26.3549 11.6977 27 13.8244 27 16C26.9967 18.9164 25.8367 21.7123 23.7745 23.7745C21.7123 25.8367 18.9164 26.9967 16 27ZM17.5 16C17.5 16.2967 17.412 16.5867 17.2472 16.8334C17.0824 17.08 16.8481 17.2723 16.574 17.3858C16.2999 17.4993 15.9983 17.5291 15.7074 17.4712C15.4164 17.4133 15.1491 17.2704 14.9393 17.0607C14.7296 16.8509 14.5867 16.5836 14.5288 16.2926C14.471 16.0017 14.5007 15.7001 14.6142 15.426C14.7277 15.1519 14.92 14.9176 15.1667 14.7528C15.4133 14.588 15.7033 14.5 16 14.5C16.3978 14.5 16.7794 14.658 17.0607 14.9393C17.342 15.2206 17.5 15.6022 17.5 16ZM23 16C23 16.2967 22.912 16.5867 22.7472 16.8334C22.5824 17.08 22.3481 17.2723 22.074 17.3858C21.7999 17.4993 21.4983 17.5291 21.2074 17.4712C20.9164 17.4133 20.6491 17.2704 20.4393 17.0607C20.2296 16.8509 20.0867 16.5836 20.0288 16.2926C19.9709 16.0017 20.0007 15.7001 20.1142 15.426C20.2277 15.1519 20.42 14.9176 20.6667 14.7528C20.9133 14.588 21.2033 14.5 21.5 14.5C21.8978 14.5 22.2794 14.658 22.5607 14.9393C22.842 15.2206 23 15.6022 23 16ZM12 16C12 16.2967 11.912 16.5867 11.7472 16.8334C11.5824 17.08 11.3481 17.2723 11.074 17.3858C10.7999 17.4993 10.4983 17.5291 10.2074 17.4712C9.9164 17.4133 9.64912 17.2704 9.43935 17.0607C9.22957 16.8509 9.08671 16.5836 9.02883 16.2926C8.97095 16.0017 9.00065 15.7001 9.11419 15.426C9.22772 15.1519 9.41998 14.9176 9.66665 14.7528C9.91332 14.588 10.2033 14.5 10.5 14.5C10.8978 14.5 11.2794 14.658 11.5607 14.9393C11.842 15.2206 12 15.6022 12 16Z"
                            fill="#B2B3B9"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex py-[11px] px-0 justify-between items-center w-full">
                <p className="text-[#333] font-roboto text-lg w-fit">
                  Показано 1-20 из 120{" "}
                </p>
                <div className="flex items-center gap-4 w-fit">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 overflow-hidden relative "
                  >
                    <path
                      d="M12.9422 15.8078C13.0003 15.8659 13.0463 15.9348 13.0777 16.0107C13.1092 16.0865 13.1253 16.1679 13.1253 16.25C13.1253 16.3321 13.1092 16.4134 13.0777 16.4893C13.0463 16.5652 13.0003 16.6341 12.9422 16.6922C12.8841 16.7502 12.8152 16.7963 12.7393 16.8277C12.6634 16.8592 12.5821 16.8753 12.5 16.8753C12.4179 16.8753 12.3366 16.8592 12.2607 16.8277C12.1848 16.7963 12.1159 16.7502 12.0578 16.6922L5.80781 10.4422C5.7497 10.3841 5.7036 10.3152 5.67215 10.2393C5.6407 10.1634 5.62451 10.0821 5.62451 9.99998C5.62451 9.91785 5.6407 9.83652 5.67215 9.76064C5.7036 9.68477 5.7497 9.61584 5.80781 9.55779L12.0578 3.30779C12.1751 3.19052 12.3341 3.12463 12.5 3.12463C12.6659 3.12463 12.8249 3.19052 12.9422 3.30779C13.0595 3.42507 13.1253 3.58413 13.1253 3.74998C13.1253 3.91583 13.0595 4.07489 12.9422 4.19217L7.13359 9.99998L12.9422 15.8078Z"
                      fill="#B2B3B9"
                    />
                  </svg>
                  <div className="flex items-center gap-2 w-fit">
                    <button className="cursor-pointer text-nowrap flex flex-col justify-center items-center gap-2.5 rounded bg-[#797FEA] shadow-[020px50px0rgba(0,0,0,0.12)] w-[30px] h-[30px]">
                      <p className="text-[#FFF] font-cairo text-sm w-[7px]">
                        1
                      </p>
                    </button>
                    <button className="cursor-pointer text-nowrap flex flex-col justify-center items-center gap-2.5 rounded border border-[#ECECEB] shadow-[020px50px0rgba(0,0,0,0.12)] w-[30px] h-[30px]">
                      <p className="text-[#B2B3B9] font-cairo text-sm w-[7px]">
                        2
                      </p>
                    </button>
                    <button className="cursor-pointer text-nowrap flex flex-col justify-center items-center gap-2.5 rounded border border-[#ECECEB] shadow-[020px50px0rgba(0,0,0,0.12)] w-[30px] h-[30px]">
                      <p className="text-[#B2B3B9] font-cairo text-sm w-[7px]">
                        3
                      </p>
                    </button>
                    <button className="cursor-pointer text-nowrap flex flex-col justify-center items-center gap-2.5 rounded border border-[#ECECEB] shadow-[020px50px0rgba(0,0,0,0.12)] w-[30px] h-[30px]">
                      <p className="text-[#B2B3B9] font-cairo text-sm w-[7px]">
                        4
                      </p>
                    </button>
                    <button className="cursor-pointer text-nowrap flex flex-col justify-center items-center gap-2.5 rounded border border-[#ECECEB] shadow-[020px50px0rgba(0,0,0,0.12)] w-[30px] h-[30px]">
                      <p className="text-[#B2B3B9] font-cairo text-sm w-[7px]">
                        5
                      </p>
                    </button>
                  </div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 overflow-hidden relative "
                  >
                    <path
                      d="M14.1922 10.4422L7.9422 16.6922C7.88413 16.7502 7.81519 16.7963 7.73932 16.8277C7.66345 16.8592 7.58213 16.8753 7.50001 16.8753C7.41789 16.8753 7.33657 16.8592 7.2607 16.8277C7.18483 16.7963 7.11589 16.7502 7.05782 16.6922C6.99976 16.6341 6.95369 16.5652 6.92227 16.4893C6.89084 16.4134 6.87466 16.3321 6.87466 16.25C6.87466 16.1679 6.89084 16.0865 6.92227 16.0107C6.95369 15.9348 6.99976 15.8659 7.05782 15.8078L12.8664 9.99998L7.05782 4.19217C6.94055 4.07489 6.87466 3.91583 6.87466 3.74998C6.87466 3.58413 6.94055 3.42507 7.05782 3.30779C7.1751 3.19052 7.33416 3.12463 7.50001 3.12463C7.66586 3.12463 7.82492 3.19052 7.9422 3.30779L14.1922 9.55779C14.2503 9.61584 14.2964 9.68477 14.3279 9.76064C14.3593 9.83652 14.3755 9.91785 14.3755 9.99998C14.3755 10.0821 14.3593 10.1634 14.3279 10.2393C14.2964 10.3152 14.2503 10.3841 14.1922 10.4422Z"
                      fill="#B2B3B9"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
