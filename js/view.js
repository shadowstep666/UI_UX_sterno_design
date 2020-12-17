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


                //click from home to practice
              const practice_button = document.getElementById("practice-button") ;
              const practice_page= document.getElementById("practice")
              
              if( practice_button || practice_page  )
                handleCreateLessonBasicPage = ( _event) =>{
                  view.setActiveScreen('practice_page')
                }
                practice_button.addEventListener('click', handleCreateLessonBasicPage);
                practice_page.addEventListener('click', handleCreateLessonBasicPage);
              break;
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
            handleCreateHomeClick = (_event) => {
              view.setActiveScreen('lesson_basic_page2');
            };
            createLessonBasicPage2_startLBPage.addEventListener('click', handleCreateHomeClick);
            createLessonBasicButtonPage2_startLBPage.addEventListener('click', handleCreateHomeClick);
          }

          //click from lesson_basic_page to lesson_basic_page2
          const createLessonBasicPage3_startLBPage = document.getElementById('lesson-basic-3');
          const createLessonBasicButtonPage3_startLBPage = document.getElementById('lesson-basic-button-3');
          if (createLessonBasicPage3_startLBPage || createLessonBasicButtonPage3_startLBPage ) {
            handleCreateHomeClick = (_event) => {
              view.setActiveScreen('lesson_basic_page3');
            };
            createLessonBasicPage3_startLBPage.addEventListener('click', handleCreateHomeClick);
            createLessonBasicButtonPage3_startLBPage.addEventListener('click', handleCreateHomeClick);
          }


            
            break;
       
            case 'lesson_basic_page3':
          if(app){
            app.innerHTML=components.lesson_basic_page3
          }
          // click event form lesson_basic_3 to home page 
          const createHomeButton = document.getElementById('home-page-button');
        if (createHomeButton) {
          handleCreateHomeClick = (_event) => {
            view.setActiveScreen('home');
          };
          createHomeButton.addEventListener('click', handleCreateHomeClick);
        }

        //click prev button from lesson_basic_3 to lesson_basic_2 
        const button_prev_click_lbpage3 = document.getElementById('btn-prev');
        if (button_prev_click_lbpage3) {
          handleButtonPrevClick = (_event) => {
            view.setActiveScreen('lesson_basic_page2');
          };
          button_prev_click_lbpage3.addEventListener('click', handleButtonPrevClick);
        }

        //click next button from lesson_basic_3 to lesson_basic_first_sound_rule 
        const button_next_click_lbpage3 = document.getElementById('btn-next');
        if (button_next_click_lbpage3) {
          handleButtonnextClick = (_event) => {
            view.setActiveScreen('lesson_basic_first_sound_rule');
          };
          button_next_click_lbpage3.addEventListener('click', handleButtonnextClick);
        }

        //click from lesson_basic_page3 to lesson_basic_lesson_basic_first_sound_rule 
        const createFirstSoundRulePage_startLBPage3 = document.getElementById('lesson-basic-3-first-sound');
        if (createFirstSoundRulePage_startLBPage3) {
          handleCreateFirstSoundRuleClick = (_event) => {
            view.setActiveScreen('lesson_basic_first_sound_rule');
          };
          createFirstSoundRulePage_startLBPage3.addEventListener('click', handleCreateFirstSoundRuleClick);
        }

        //click from lesson_basic_page3 to lesson_basic_lesson_basic_first_sound_rule 
        const createMainSoundRulePage_startLBPage3 = document.getElementById('lesson-basic-3-main-sound');
        if (createMainSoundRulePage_startLBPage3) {
          handleCreateMainSoundRuleClick = (_event) => {
            view.setActiveScreen('lesson_basic_main_sound_rule');
          };
          createMainSoundRulePage_startLBPage3.addEventListener('click', handleCreateMainSoundRuleClick);
        }
          break;

          // lesson_basic_first_sound_rule
          case 'lesson_basic_first_sound_rule':
            if(app){
              app.innerHTML=components.lesson_basic_first_sound_rule
            }

            const createLessonBasicPage3_fsr = document.getElementById('btn-prev');
            if (createLessonBasicPage3_fsr){
              handleButtonPrevClick = (_event) => {
                view.setActiveScreen('lesson_basic_page3');
              };
              createLessonBasicPage3_fsr.addEventListener('click', handleButtonPrevClick);
            }

            break;
          
            // lesson_basic_main_sound_rule
          case 'lesson_basic_main_sound_rule':
            if(app){
              app.innerHTML=components.lesson_basic_main_sound_rule
            }

            const createLessonBasicPage3_msr = document.getElementById('btn-prev');
            if (createLessonBasicPage3_msr){
              handleButtonPrevClick = (_event) => {
                view.setActiveScreen('lesson_basic_first_sound_rule');
              };
              createLessonBasicPage3_msr.addEventListener('click', handleButtonPrevClick);
            }

            break;

            // trang lesson_basic_2
          case 'lesson_basic_page2':
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

          case 'lesson_advance_page1':
            if(app){
              app.innerHTML=components.lesson_advance_page1
            }

            break;

            // practice_page
          case 'practice_page':
            if(app){
              app.innerHTML=components.practice_page
            }


      }

       

};