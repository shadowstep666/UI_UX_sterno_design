const view = {};

const createHomeButton = document.getElementById('home-page-button');
if (createHomeButton) {
  handleCreateHomeClick = (_event) => {
    view.setActiveScreen('home');
  };
  createHomeButton.addEventListener('click', handleCreateHomeClick);
}
view.setActiveScreen = (componentName) => {
    const app = document.getElementById('app');
    switch (componentName) {
        case 'home':
            if (app) {
                app.innerHTML = components.home;
              }

              //click from home to lesson basic
              const lesson_basic_button = document.getElementById("lesson-basic-button") ;
              const lesson_basic_page= document.getElementById("basic")
              if( lesson_basic_button )
                handleCreateLessonBasicPage = ( _event) =>{
                  view.setActiveScreen('lesson_basic_page')
                }
                lesson_basic_button.addEventListener('click', handleCreateLessonBasicPage);
                lesson_basic_page.addEventListener('click', handleCreateLessonBasicPage);
              

                //click from home to lesson_advance
                const lesson_advance_button = document.getElementById("lesson-advance-button") ;
                const lesson_advance_page= document.getElementById("advance")
                if( lesson_advance_button || lesson_advance_page )
                  handleCreateLessonAdvancePage = ( _event) =>{
                    view.setActiveScreen('lesson_advance_page')
                  }
                  lesson_advance_button.addEventListener('click', handleCreateLessonAdvancePage);
                   lesson_advance_page.addEventListener('click', handleCreateLessonAdvancePage);

                //click from home to practice
              const practice_button = document.getElementById("practice-button") ;
              const practice_page= document.getElementById("practice")

              if( practice_button || practice_page  )
                handleCreatePracticePage = ( _event) =>{
                  view.setActiveScreen('practice_page')
                }
                practice_button.addEventListener('click', handleCreatePracticePage);
                practice_page.addEventListener('click', handleCreatePracticePage);

                //click from home to evaluate page
              const evaluate_button = document.getElementById("evaluate-button") ;
              const evaluate_page= document.getElementById("evaluate")

              if( evaluate_button || evaluate_page  )
                handleCreateEvaluatePage = ( _event) =>{
                  view.setActiveScreen('evaluate_page')
                }
                evaluate_button.addEventListener('click', handleCreateEvaluatePage);
                evaluate_page.addEventListener('click', handleCreateEvaluatePage);

                 //click from home to report page
                const report_button = document.getElementById("report-button") ;

                if( report_button  )
                  handleCreateReportPage = ( _event) =>{
                    view.setActiveScreen('report_page')
                  }
                  report_button.addEventListener('click', handleCreateReportPage);
 


              break;

        case 'register':
            if(app) {
                app.innerHTML = components.register;
            }
            const alreadyHaveAccountButton = document.getElementById('already-have-account-button');
            if (alreadyHaveAccountButton) {
              handleCreateAccountClick = (_event) => {
                view.setActiveScreen('login');
              };
              alreadyHaveAccountButton.addEventListener('click', handleCreateAccountClick);
            }

            // Listen submit event

        break;

        case 'login':

        if(app) {
            app.innerHTML = components.login;
        }
    
        const createAccountButton = document.getElementById('create-account-button');
        if (createAccountButton) {
          handleCreateAccountClick = (_event) => {
            view.setActiveScreen('register');
          };
          createAccountButton.addEventListener('click', handleCreateAccountClick);
        }
    
        // click event from login page to home page
        const createHomeButonn_startLogin = document.getElementById("btn-login");
        if (createHomeButonn_startLogin) {
          handleCreateHomeClick = (_event) => {
            view.setActiveScreen('home');
          };
          createHomeButonn_startLogin.addEventListener('click', handleCreateHomeClick);
        }
        break;
  
        case 'lesson_basic_page':
          if (app) {
              app.innerHTML = components.lesson_basic_page;
            }
          // click event form lesson_basic_page to home page 
          const createHomeButton_startLBPage = document.getElementById('home-page-button');
          if (createHomeButton_startLBPage) {
            handleCreateHomeClick = (_event) => {
              view.setActiveScreen('home');
            };
            createHomeButton_startLBPage.addEventListener('click', handleCreateHomeClick);
          }

            //click from lesson_basic_page to lesson_basic_page2
            const createLessonBasicPage2_startLBPage = document.getElementById('lesson-basic-2');
            const createLessonBasicButtonPage2_startLBPage = document.getElementById('lesson-basic-button-2');
            if (createLessonBasicPage2_startLBPage || createLessonBasicButtonPage2_startLBPage ) {
              handleCreateLessonBasicSubClick = (_event) => {
                view.setActiveScreen('lesson_basic_page2');
              };
              createLessonBasicPage2_startLBPage.addEventListener('click', handleCreateLessonBasicSubClick);
              createLessonBasicButtonPage2_startLBPage.addEventListener('click', handleCreateLessonBasicSubClick);
            }

            //click from lesson_basic_page to lesson_basic_page2
            const createLessonBasicPage3_startLBPage = document.getElementById('lesson-basic-3');
            const createLessonBasicButtonPage3_startLBPage = document.getElementById('lesson-basic-button-3');
            if (createLessonBasicPage3_startLBPage || createLessonBasicButtonPage3_startLBPage ) {
              handleCreateLessonBasicSubClick = (_event) => {
                view.setActiveScreen('lesson_basic_page3');
              };
              createLessonBasicPage3_startLBPage.addEventListener('click', handleCreateLessonBasicSubClick);
              createLessonBasicButtonPage3_startLBPage.addEventListener('click', handleCreateLessonBasicSubClick);
            }  

            //click from lesson_basic_page to lesson_advance_page
            const createLessonAdvance_startLBPage = document.getElementById('lesson-advance-button');
            if (createLessonAdvance_startLBPage ) {
              handleCreateLessonAdvanceClick = (_event) => {
                view.setActiveScreen('lesson_advance_page');
              };
              createLessonAdvance_startLBPage.addEventListener('click', handleCreateLessonAdvanceClick);
            }  

            //click from lesson_basic_page to practice_page
            const createPracticePage_startLBPage = document.getElementById('practice-button');
            if (createPracticePage_startLBPage ) {
              handleCreatePracticePageClick = (_event) => {
                view.setActiveScreen('practice_page');
              };
              createPracticePage_startLBPage.addEventListener('click', handleCreatePracticePageClick);
            }              

            //click from lesson_basic_page to evaluate_page
            const createEvaluatePage_startLBPage = document.getElementById('evaluate-button');
            if (createEvaluatePage_startLBPage ) {
              handleCreateEvaluatePageClick = (_event) => {
                view.setActiveScreen('evaluate_page');
              };
              createEvaluatePage_startLBPage.addEventListener('click', handleCreateEvaluatePageClick);
            }  

            //click from lesson_basic_page to report_page
            const createReportPage_startLBPage = document.getElementById('report-button');
            if (createReportPage_startLBPage ) {
              handleCreateReportPageClick = (_event) => {
                view.setActiveScreen('report_page');
              };
              createReportPage_startLBPage.addEventListener('click', handleCreateReportPageClick);
            }                 
          break;
       
        case 'lesson_basic_page3':
          if(app){
            app.innerHTML=components.lesson_basic_page3
          }
          // click event form lesson_basic_3 to home page 
          const createHomeButton_startLBPage3 = document.getElementById('home-page-button');
          if (createHomeButton_startLBPage3) {
            handleCreateHomeClick = (_event) => {
              view.setActiveScreen('home');
            };
            createHomeButton_startLBPage3.addEventListener('click', handleCreateHomeClick);
          }

          //click prev button from lesson_basic_3 to lesson_basic_2 
          const button_prev_click_startLBPage3 = document.getElementById('btn-prev');
          if (button_prev_click_startLBPage3) {
            handleButtonPrevClick = (_event) => {
              view.setActiveScreen('lesson_basic_page2');
            };
            button_prev_click_startLBPage3.addEventListener('click', handleButtonPrevClick);
          }

          //click next button from lesson_basic_3 to lesson_basic_first_sound_rule 
          const button_next_click_startLBPage3 = document.getElementById('btn-next');
          if (button_next_click_startLBPage3) {
            handleButtonnextClick = (_event) => {
              view.setActiveScreen('lesson_basic_first_sound_rule');
            };
            button_next_click_startLBPage3.addEventListener('click', handleButtonnextClick);
          }

          //click from lesson_basic_page3 to lesson_basic_lesson_basic_first_sound_rule 
          const createFirstSoundRulePage_startLBPage3 = document.getElementById('lesson-basic-3-first-sound');
          if (createFirstSoundRulePage_startLBPage3) {
            handleCreateFirstSoundRuleClick = (_event) => {
              view.setActiveScreen('lesson_basic_first_sound_rule');
            };
            createFirstSoundRulePage_startLBPage3.addEventListener('click', handleCreateFirstSoundRuleClick);
          }

          //click from lesson_basic_page3 to lesson_basic_lesson_basic_main_sound_rule 
          const createMainSoundRulePage_startLBPage3 = document.getElementById('lesson-basic-3-main-sound');
          if (createMainSoundRulePage_startLBPage3) {
            handleCreateMainSoundRuleClick = (_event) => {
              view.setActiveScreen('lesson_basic_main_sound_rule');
            };
            createMainSoundRulePage_startLBPage3.addEventListener('click', handleCreateMainSoundRuleClick);
          }

          //click from lesson_basic_page3 to practice_page 
          const createPracticePage_startLBPage3 = document.getElementById('practice-button');
          if (createPracticePage_startLBPage3) {
            handleCreatePracticePageClick = (_event) => {
              view.setActiveScreen('practice_page');
            };
            createPracticePage_startLBPage3.addEventListener('click', handleCreatePracticePageClick);
          }

          //click from lesson_basic_page3 to evaluate_page 
          const createEvaluatePage_startLBPage3 = document.getElementById('evaluate-button');
          if (createEvaluatePage_startLBPage3) {
            handleCreateEvaluatePageClick = (_event) => {
              view.setActiveScreen('evaluate_page');
            };
            createEvaluatePage_startLBPage3.addEventListener('click', handleCreateEvaluatePageClick);
          }

        break;

          // lesson_basic_first_sound_rule
          case 'lesson_basic_first_sound_rule':
            if(app){
              app.innerHTML=components.lesson_basic_first_sound_rule
            }

            // click event form lesson_basic_first_sound_rule to home page 
            const createHomeButton_startLessonBasic_fsr = document.getElementById('home-page-button');
            if (createHomeButton_startLessonBasic_fsr) {
              handleCreateHomeClick = (_event) => {
                view.setActiveScreen('home');
              };
              createHomeButton_startLessonBasic_fsr.addEventListener('click', handleCreateHomeClick);
            }
            

            const createLessonBasicPage3_fsr = document.getElementById('btn-prev');
            if (createLessonBasicPage3_fsr){
              handleButtonPrevClick = (_event) => {
                view.setActiveScreen('lesson_basic_page3');
              };
              createLessonBasicPage3_fsr.addEventListener('click', handleButtonPrevClick);
            }

            const createLessonBasicPage3_fsr_msr = document.getElementById('btn-next');
            if (createLessonBasicPage3_fsr_msr){
              handleButtonNextClick = (_event) => {
                view.setActiveScreen('lesson_basic_main_sound_rule');
              };
              createLessonBasicPage3_fsr_msr.addEventListener('click', handleButtonNextClick);
            }

            break;
          
            // lesson_basic_main_sound_rule
          case 'lesson_basic_main_sound_rule':
            // show lesson_basic_main_sound_rule page
            if(app){
              app.innerHTML=components.lesson_basic_main_sound_rule
            }

            // click event form lesson_basic_main_sound_rule to home page 
            const createHomeButton_startLessonBasic_msr = document.getElementById('home-page-button');
            if (createHomeButton_startLessonBasic_msr) {
              handleCreateHomeClick = (_event) => {
                view.setActiveScreen('home');
              };
              createHomeButton_startLessonBasic_msr.addEventListener('click', handleCreateHomeClick);
            }
            

            // click from lesson_basic_main_sound_rule to lesson_basic_first_sound_rule
            const createLessonBasicPage3_msr_fsr = document.getElementById('btn-prev');
            if (createLessonBasicPage3_msr_fsr){
              handleButtonPrevClick = (_event) => {
                view.setActiveScreen('lesson_basic_first_sound_rule');
              };
              createLessonBasicPage3_msr_fsr.addEventListener('click', handleButtonPrevClick);
            }

            // click from lesson_basic_main_sound_rule to lesson_basic_end_sound_rule
            const createLessonBasicPage3_msr_esr = document.getElementById('btn-next');
            if (createLessonBasicPage3_msr_esr){
              handleButtonNextClick = (_event) => {
                view.setActiveScreen('lesson_basic_end_sound_rule');
              };
              createLessonBasicPage3_msr_esr.addEventListener('click', handleButtonNextClick);
            }

            break;


            case 'lesson_basic_end_sound_rule':
            if(app){
              app.innerHTML=components.lesson_basic_end_sound_rule
            }

            // click event form lesson_basic_end_sound_rule to home page 
            const createHomeButton_startLessonBasic_esr = document.getElementById('home-page-button');
            if (createHomeButton_startLessonBasic_esr) {
              handleCreateHomeClick = (_event) => {
                view.setActiveScreen('home');
              };
              createHomeButton_startLessonBasic_esr.addEventListener('click', handleCreateHomeClick);
            }

              // click from lesson_basic_end_sound_rule  to  lesson_basic_main_sound_rule
            const createLessonBasicPage3_esr_msr = document.getElementById('btn-prev');
            if (createLessonBasicPage3_esr_msr){
              handleButtonPrevClick = (_event) => {
                view.setActiveScreen('lesson_basic_main_sound_rule');
              };
              createLessonBasicPage3_esr_msr.addEventListener('click', handleButtonPrevClick);
            }

            

            break;

            //  lesson_basic_2
          case 'lesson_basic_page2':
            //  show lesson_basic_2 
            if(app){
              app.innerHTML=components.lesson_basic_page2
            }

              // bắt sự kiện vào trang chủ 
              const createHomeButtonStart_lbpage2 = document.getElementById('home-page-button');
            if (createHomeButtonStart_lbpage2) {
              handleCreateHomeClick = (_event) => {
                view.setActiveScreen('home');
              };
              createHomeButtonStart_lbpage2.addEventListener('click', handleCreateHomeClick);
            }


            const button_next_click_lbpage2 = document.getElementById('btn-next');
            if (button_next_click_lbpage2) {
              handleButtonNextClick = (_event) => {
                view.setActiveScreen('lesson_basic_page3');
              };
              button_next_click_lbpage2.addEventListener('click', handleButtonNextClick);
            }
          break;

          case 'lesson_advance_page':
            if(app){
              app.innerHTML=components.lesson_advance_page
            }
            const createHomeButtonStart_lesson_advance = document.getElementById('home-page-button');
            if (createHomeButtonStart_lesson_advance) {
              handleCreateHomeClick = (_event) => {
                view.setActiveScreen('home');
              };
              createHomeButtonStart_lesson_advance.addEventListener('click', handleCreateHomeClick);
            }

            break;

            // practice_page
          case 'practice_page':
            // show practice_page
            if(app){
              app.innerHTML=components.practice_page
            }

            // click event from practice_page to home_page
            const createHomeButtonStart_practice_page = document.getElementById('home-page-button');
            if (createHomeButtonStart_practice_page) {
              handleCreateHomeClick = (_event) => {
                view.setActiveScreen('home');
              };
              createHomeButtonStart_practice_page.addEventListener('click', handleCreateHomeClick);
            }
            break ;

          case 'evaluate_page':
            // show practice_page
            if(app){
              app.innerHTML=components.evaluate_page
            }
            break;

            case 'report_page':
              // show report_page
              if(app){
                app.innerHTML=components.report_page
              }
      }

       

};