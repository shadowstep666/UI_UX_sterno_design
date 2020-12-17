const components ={

    lesson_basic_page: 
    `        
    <div id="lesson-basic-page3">
    <div class="container">
        <div class= "leftside-bar">
            <div class="navigationMenu">
                        <div class="navigation-bar-item" id="home-page-button">Trang chủ</div>
        
                        <div  class="navigation-bar-item" id="lesson-basic-button">Bài học cơ bản</div>
  
                        <div class="sub-item" id="lesson-basic-1">Bài 1.Giới thiệu về gõ tốc ký</div>
                        <div class="sub-item" id="lesson-basic-2">Bài 2.Giới thiệu về bàn phím tốc ký</div>
                        <div class="sub-item" id="lesson-basic-3">Bài 3.Các quy tắc gõ tốc ký </div>
        
                        <div class="navigation-bar-item" id="lesson-advanced-button">Bài học nâng cao</div>
        
                        <div class="navigation-bar-item" id="practice-button">Thực hành</div>
        
                        <div class="navigation-bar-item" id="game-button">Trò chơi</div>
        
                        <div class="navigation-bar-item" id="contract-button">Liên hệ </div>
        
                        <div class="navigation-bar-item" id="acoount-button">Tài khoản</div>
            </div>
        </div>
        <div class="rightside">
            <h1>Bài học nâng cao</h2>
            <div class="siteThemeColour" ></div>
            <div class="page-container">
                <div class='main-container'>
                  <div class ="lesson-design" id="lesson-basic-button-1">Bài 1.Giới thiệu về gõ tốc ký</div>
                  <div class ="lesson-design" id="lesson-basic-button-2">Bài 2.Giới thiệu về bàn phím tốc ký</div>
                  <div class ="lesson-design" id="lesson-basic-button-3">Bài 3.Các quy tắc gõ tốc ký </div>
                  <div class ="lesson-design" id="lesson-basic-button-4">Bài 4.Giới thiệu về trang web </div>

                </div>
            </div>
        
    </div>
    </div>
    <div class="about-us"> About us </div>
    `,

  lesson_basic_page2:` <div id="lesson-basic-page2">
  <div class="container">
      <div class= "leftside-bar">
          <div class="navigationMenu">
                      <div class="navigation-bar-item" id="home-page-button">Trang chủ</div>
      
                      <div  class="navigation-bar-item" id="lesson-basic-button">Bài học cơ bản</div>

                      <div class="sub-item" id="lesson-basic-1">Bài 1.Giới thiệu về gõ tốc ký</div>
                      <div class="sub-item" id="lesson-basic-2">Bài 2.Giới thiệu về bàn phím tốc ký</div>
                      <div class="sub-item" id="lesson-basic-3">Bài 3.Các quy tắc gõ tốc ký </div>
      
                      <div class="navigation-bar-item" id="lesson-advanced-button">Bài học nâng cao</div>
      
                      <div class="navigation-bar-item" id="practice-button">Thực hành</div>
      
                      <div class="navigation-bar-item" id="game-button">Trò chơi</div>
      
                      <div class="navigation-bar-item" id="contract-button">Liên hệ </div>
      
                      <div class="navigation-bar-item" id="acoount-button">Tài khoản</div>
          </div>
      </div>
      <div class="rightside">
          <h1>Bài học cơ bản</h2>
          <div class="siteThemeColour" ></div>
          <div class="page-title">
              <div class='main-contain'>
                  <h3>1.Bàn phím gõ tốc ký (steno) </h3>
              <div>
                  <p>Bàn phím gõ tốc ký tiếng việt gồm 22 phím + 1 phím dài :</p>
                  <p>- 4 phím đặc biệt (S,T,H,N) , nhãn dán trùng nhau nhưng có cai trò khác nhau </p>
                  <p>- 1 phím dài để chuyển chế độ gõ  </p>
                  <img src="../Images/steno-board1.PNG" class="image" >
                  <p></p>
                  <p>- Bàn phím tiếng việt được ánh xạ lên qwenty gồm có 24 phím </p>
                  <p>- Dải số từ 1-0 tương ứng với thanh số trên bàn phím gõ tiêng việt</p>
                  <img src="../Images/standard-board1.PNG" class ="image">

                  <img src="../Images/standard-steno-board1.PNG" class="image">

                  <P>2. Cách đặt ngón tay lên bàn phím gõ tốc ký</P>
                  <img src="../Images/how-to-finger.PNG" class="image"> 
                  <img src="../Images/how-to-finger2.PNG" class="image">
                  <P>3.Trật tự của bàn phím gõ tốc ký</P>
                  <img src="../Images/rule-typing.PNG" class="image">
              </div>
             <div>
                 <div id="stenoKeyboard" class="stenoKeyboard">
              <div class="stenoUpperBank">
                  <div class="stenoKey rounded-steno" id="stenoKey-0" data-priority="1" data-keyqwerty="81" data-valueqwerty="q" style="background-color: rgb(252, 202, 203); color: rgb(0, 0, 0);">S</div>
                  <div class="stenoKey rounded-steno" id="stenoKey-1" data-priority="3" data-keyqwerty="87" data-valueqwerty="w" style="background-color: rgb(252, 215, 162); color: rgb(0, 0, 0);">K</div>
                  <div class="stenoKey rounded-steno" id="stenoKey-2" data-priority="5" data-keyqwerty="69" data-valueqwerty="e" style="background-color: rgb(248, 248, 162); color: rgb(0, 0, 0);">R</div>
                  <div class="stenoKey rounded-steno" id="stenoKey-3" data-priority="7" data-keyqwerty="82" data-valueqwerty="r" style="background-color: rgb(179, 249, 163); color: rgb(0, 0, 0);">N</div>
                  <div class="stenoKey rounded-steno" id="stenoKey-4" data-priority="8" data-keyqwerty="84" data-valueqwerty="t" style="background-color: rgb(179, 249, 163); color: rgb(0, 0, 0);">H</div>
                  <div class="stenoKey rounded-steno" id="stenoKey-5" data-priority="10" data-keyqwerty="85" data-valueqwerty="u" style="background-color: rgb(179, 249, 163); color: rgb(0, 0, 0);">*</div>
                  <div class="stenoKey rounded-steno" id="stenoKey-6" data-priority="16" data-keyqwerty="73" data-valueqwerty="i" style="background-color: rgb(179, 249, 163); color: rgb(0, 0, 0);">W</div>
                  <div class="stenoKey rounded-steno" id="stenoKey-7" data-priority="18" data-keyqwerty="79" data-valueqwerty="o" style="background-color: rgb(248, 248, 162); color: rgb(0, 0, 0);">J</div>
                  <div class="stenoKey rounded-steno" id="stenoKey-8" data-priority="19" data-keyqwerty="80" data-valueqwerty="p" style="background-color: rgb(252, 215, 162); color: rgb(0, 0, 0);">N</div>
                  <div class="stenoKey rounded-steno" id="stenoKey-9" data-priority="21" data-keyqwerty="219" data-valueqwerty="[" style="background-color: rgb(252, 202, 203); color: rgb(0, 0, 0);">T</div></div>
              <div class="stenoLowerBank">
                  <div class="stenoKey rounded-steno" id="stenoKey-10" data-priority="2" data-keyqwerty="65" data-valueqwerty="a" style="background-color: rgb(252, 202, 203); color: rgb(0, 0, 0);">T</div>
                  <div class="stenoKey rounded-steno" id="stenoKey-11" data-priority="4" data-keyqwerty="83" data-valueqwerty="s" style="background-color: rgb(252, 215, 162); color: rgb(0, 0, 0);">P</div>
                  <div class="stenoKey rounded-steno" id="stenoKey-12" data-priority="6" data-keyqwerty="68" data-valueqwerty="d" style="background-color: rgb(248, 248, 162); color: rgb(0, 0, 0);">H</div>
                  <div class="stenoKey rounded-steno" id="stenoKey-13" data-priority="7" data-keyqwerty="70" data-valueqwerty="f" style="background-color: rgb(179, 249, 163); color: rgb(0, 0, 0);">N</div>
                  <div class="stenoKey rounded-steno" id="stenoKey-14" data-priority="9" data-keyqwerty="71" data-valueqwerty="g" style="background-color: rgb(179, 249, 163); color: rgb(0, 0, 0);">S</div>
                  <div class="stenoKey rounded-steno" id="stenoKey-15" data-priority="11" data-keyqwerty="74" data-valueqwerty="j" style="background-color: rgb(179, 249, 163); color: rgb(0, 0, 0);">I</div>
                  <div class="stenoKey rounded-steno" id="stenoKey-16" data-priority="17" data-keyqwerty="75" data-valueqwerty="k" style="background-color: rgb(179, 249, 163); color: rgb(0, 0, 0);">Y</div>
                  <div class="stenoKey rounded-steno" id="stenoKey-17" data-priority="18" data-keyqwerty="76" data-valueqwerty="l" style="background-color: rgb(248, 248, 162); color: rgb(0, 0, 0);">J</div>
                  <div class="stenoKey rounded-steno" id="stenoKey-18" data-priority="20" data-keyqwerty="186" data-valueqwerty=";" style="background-color: rgb(252, 215, 162); color: rgb(0, 0, 0);">G</div>
                  <div class="stenoKey rounded-steno" id="stenoKey-19" data-priority="22" data-keyqwerty="222" data-valueqwerty="'" style="background-color: rgb(252, 202, 203); color: rgb(0, 0, 0);">K</div></div>
              <div class="stenoVowelKeys">
                  <div class="stenoKey rounded-steno" id="stenoKey-20" data-priority="12" data-keyqwerty="67" data-valueqwerty="c" style="background-color: rgb(186, 207, 250); color: rgb(0, 0, 0);">U</div>
                  <div class="stenoKey rounded-steno" id="stenoKey-21" data-priority="13" data-keyqwerty="86" data-valueqwerty="v" style="background-color: rgb(186, 207, 250); color: rgb(0, 0, 0);">O</div>
                  <div class="stenoKey rounded-steno" id="stenoKey-22" data-priority="14" data-keyqwerty="78" data-valueqwerty="n" style="background-color: rgb(186, 207, 250); color: rgb(0, 0, 0);">E</div>
                  <div class="stenoKey rounded-steno" id="stenoKey-23" data-priority="15" data-keyqwerty="77" data-valueqwerty="m" style="background-color: rgb(186, 207, 250); color: rgb(0, 0, 0);">A</div></div>
          </div></div>
              </div>
          </div>
          <div id="next-prev-button" >
              <div id='btn-prev'>
              <input class='next-prev-button' type="button" value='Bài học trước' />
          </div>
          <div id='btn-next'>
              <input class='next-prev-button' type='button' value='Bài học tiếp theo' />
          </div> 
      </div>
  </div>
  </div>
<div class="about-us"> About us </div>
</div>` ,

  lesson_basic_page3:` 
  <div id="lesson-basic-page3">
  <div class="container">
      <div class= "leftside-bar">
          <div class="navigationMenu">
                      <div class="navigation-bar-item" id="home-page-button">Trang chủ</div>
      
                      <div  class="navigation-bar-item" id="lesson-basic-button">Bài học cơ bản</div>

                      <div class="sub-item" id="lesson-basic-1">Bài 1.Giới thiệu về gõ tốc ký</div>
                      <div class="sub-item" id="lesson-basic-2">Bài 2.Giới thiệu về bàn phím tốc ký</div>
                      <div class="sub-item" id="lesson-basic-3">Bài 3.Các quy tắc gõ tốc ký </div>

                      <div class="s-sub-item" id="lesson-basic-3-first-sound">Bài 3.1 Các quy tắc gõ âm đầu</div>
                      <div class="s-sub-item" id="lesson-basic-3-main-sound">Bài 3.2 Các quy tắc gõ chính</div>
                      <div class="s-sub-item" id="lesson-basic-3-sub-3-end-sound">Bài 3.3 Các quy tắc gõ cươi</div>
      
                      <div class="navigation-bar-item" id="lesson-advanced-button">Bài học nâng cao</div>
      
                      <div class="navigation-bar-item" id="practice-button">Thực hành</div>
      
                      <div class="navigation-bar-item" id="game-button">Trò chơi</div>
      
                      <div class="navigation-bar-item" id="contract-button">Liên hệ </div>
      
                      <div class="navigation-bar-item" id="acoount-button">Tài khoản</div>
          </div>
      </div>
      <div class="rightside">
          <h1>Bài học cơ bản</h2>
          <div class="siteThemeColour" ></div>
          <div class="page-title">
              <h3>Bài 3.Các quy tắc gõ tốc ký</h3>
             <div class="s-sub-item" id="first-sound">Bài 3.1 các quy tắc gõ âm đầu</div>
             <div class="s-sub-item" id="main-sound">Bài 3.2 các quy tắc gõ âm chính</div>
             <div class="s-sub-item" id="end-sound">Bài 3.3 các quy tắc gõ âm cuối</div>
          </div>
          <div id="next-prev-button" >
              <div id='btn-prev'>
              <input class='next-prev-button' type="button" value='Bài học trước' />
          </div>
          <div id='btn-next'>
              <input class='next-prev-button' type='button' value='Bài học tiếp theo' />
          </div> 
      </div>
  </div>
  </div>
<div class="about-us"> About us </div>
</div>`,


lesson_basic_first_sound_rule: 
`       
<div id="lesson-basic-page3-1">
    <div class="container">
        <div class= "leftside-bar">
            <div class="navigationMenu">
                        <div class="navigation-bar-item" id="home-page-button">Trang chủ</div>
        
                        <div  class="navigation-bar-item" id="lesson-basic-button">Bài học cơ bản</div>
  
                        <div class="sub-item" id="lesson-basic-1">Bài 1.Giới thiệu về gõ tốc ký</div>
                        <div class="sub-item" id="lesson-basic-2">Bài 2.Giới thiệu về bàn phím tốc ký</div>
                        <div class="sub-item" id="lesson-basic-3">Bài 3.Các quy tắc gõ tốc ký </div>
  
                        <div class="s-sub-item" id="lesson-basic-3-first-sound">Bài 3.1 Các quy tắc gõ âm đầu</div>
                        <div class="s-sub-item" id="lesson-basic-3-main-sound">Bài 3.2 Các quy tắc gõ âm chính</div>
                        <div class="s-sub-item" id="lesson-basic-3-end-sound">Bài 3.3 Các quy tắc gõ âm cuối </div>
        
                        <div class="navigation-bar-item" id="lesson-advanced-button">Bài học nâng cao</div>
        
                        <div class="navigation-bar-item" id="practice-button">Thực hành</div>
        
                        <div class="navigation-bar-item" id="game-button">Trò chơi</div>
        
                        <div class="navigation-bar-item" id="contract-button">Liên hệ </div>
        
                        <div class="navigation-bar-item" id="acoount-button">Tài khoản</div>
            </div>
        </div>
        <div class="rightside">
            <h1>Bài học cơ bản</h1>
            <div class="siteThemeColour" ></div>
            <div class="page-title">
                <h2>Bài 3.Các quy tắc gõ tốc ký</h2>
               <h3>Bài 3.1 các quy tắc gõ âm đầu</h3>

               <div class="table-wrapper">
                <table class="fl-table">
                    <thead>
                    <tr>
                        <th>Số thứ tự </th>
                        <th>Âm đầu</th>
                        <th>Phím Sterno</th>
                    </tr>
                    </thead>
                    <tbody>
                        <td >1</td>
                        <td >ngh</td>
                        <td >KR</td>
                    </tr><tr class="2-column-first even" role="row">
                        <td class="index sorting_1">2</td>
                        <td class="value-word">đ</td>
                        <td class="value-key-steno">TP</td>
                    </tr><tr class="3-column-first odd" role="row">
                        <td class="index sorting_1">3</td>
                        <td class="value-word">kh</td>
                        <td class="value-key-steno">KH</td>
                    </tr><tr class="4-column-first even" role="row">
                        <td class="index sorting_1">4</td>
                        <td class="value-word">gh</td>
                        <td class="value-key-steno">KP</td>
                    </tr><tr class="5-column-first odd" role="row">
                        <td class="index sorting_1">5</td>
                        <td class="value-word">b</td>
                        <td class="value-key-steno">P</td>
                    </tr><tr class="6-column-first even" role="row">
                        <td class="index sorting_1">6</td>
                        <td class="value-word">gi</td>
                        <td class="value-key-steno">SH</td>
                    </tr><tr class="7-column-first odd" role="row">
                        <td class="index sorting_1">7</td>
                        <td class="value-word">c</td>
                        <td class="value-key-steno">K</td>
                    </tr><tr class="8-column-first even" role="row">
                        <td class="index sorting_1">8</td>
                        <td class="value-word">d</td>
                        <td class="value-key-steno">SP</td>
                    </tr><tr class="9-column-first odd" role="row">
                        <td class="index sorting_1">9</td>
                        <td class="value-word">ch</td>
                        <td class="value-key-steno">SK</td>
                    </tr><tr class="10-column-first even" role="row">
                        <td class="index sorting_1">10</td>
                        <td class="value-word">g</td>
                        <td class="value-key-steno">KP</td>
                    </tr><tr class="11-column-first odd" role="row">
                        <td class="index sorting_1">11</td>
                        <td class="value-word">h</td>
                        <td class="value-key-steno">H</td>
                    </tr><tr class="12-column-first even" role="row">
                        <td class="index sorting_1">12</td>
                        <td class="value-word">k</td>
                        <td class="value-key-steno">K</td>
                    </tr><tr class="13-column-first odd" role="row">
                        <td class="index sorting_1">13</td>
                        <td class="value-word">l</td>
                        <td class="value-key-steno">SR</td>
                    </tr><tr class="14-column-first even" role="row">
                        <td class="index sorting_1">14</td>
                        <td class="value-word">m</td>
                        <td class="value-key-steno">RH</td>
                    </tr><tr class="15-column-first odd" role="row">
                        <td class="index sorting_1">15</td>
                        <td class="value-word">n</td>
                        <td class="value-key-steno">PR</td>
                    </tr><tr class="16-column-first even" role="row">
                        <td class="index sorting_1">16</td>
                        <td class="value-word">p</td>
                        <td class="value-key-steno">SPH</td>
                    </tr><tr class="17-column-first odd" role="row">
                        <td class="index sorting_1">17</td>
                        <td class="value-word">q</td>
                        <td class="value-key-steno">STK</td>
                    </tr><tr class="18-column-first even" role="row">
                        <td class="index sorting_1">18</td>
                        <td class="value-word">r</td>
                        <td class="value-key-steno">R</td>
                    </tr><tr class="19-column-first odd" role="row">
                        <td class="index sorting_1">19</td>
                        <td class="value-word">s</td>
                        <td class="value-key-steno">S</td>
                    </tr><tr class="20-column-first even" role="row">
                        <td class="index sorting_1">20</td>
                        <td class="value-word">t</td>
                        <td class="value-key-steno">T</td>
                    </tr><tr class="21-column-first odd" role="row">
                        <td class="index sorting_1">21</td>
                        <td class="value-word">th</td>
                        <td class="value-key-steno">TH</td>
                    </tr><tr class="22-column-first even" role="row">
                        <td class="index sorting_1">22</td>
                        <td class="value-word">v</td>
                        <td class="value-key-steno">SPR</td>
                    </tr><tr class="23-column-first odd" role="row">
                        <td class="index sorting_1">23</td>
                        <td class="value-word">ph</td>
                        <td class="value-key-steno">PH</td>
                    </tr><tr class="24-column-first even" role="row">
                        <td class="index sorting_1">24</td>
                        <td class="value-word">x</td>
                        <td class="value-key-steno">ST</td>
                    </tr><tr class="25-column-first odd" role="row">
                        <td class="index sorting_1">25</td>
                        <td class="value-word">ng</td>
                        <td class="value-key-steno">KR</td>
                    </tr><tr class="26-column-first even" role="row">
                        <td class="index sorting_1">26</td>
                        <td class="value-word">nh</td>
                        <td class="value-key-steno">TK</td>
                    </tr><tr class="27-column-first odd" role="row">
                        <td class="index sorting_1">27</td>
                        <td class="value-word">tr</td>
                        <td class="value-key-steno">TR</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            
            </div>
            <div id="next-prev-button" >
                <div id='btn-prev'>
                <input class='next-prev-button' type="button" value='Bài học trước' />
            </div>
            <div id='btn-next'>
                <input class='next-prev-button' type='button' value='Bài học tiếp theo' />
            </div> 
        </div>
    </div>
    </div>
  <div class="about-us"> About us </div>
  </div>`,

  lesson_basic_main_sound_rule:
  `
  <div id="lesson-basic-page3-2">
  <div class="container">
      <div class= "leftside-bar">
          <div class="navigationMenu">
                      <div class="navigation-bar-item" id="home-page-button">Trang chủ</div>
      
                      <div  class="navigation-bar-item" id="lesson-basic-button">Bài học cơ bản</div>

                      <div class="sub-item" id="lesson-basic-1">Bài 1.Giới thiệu về gõ tốc ký</div>
                      <div class="sub-item" id="lesson-basic-2">Bài 2.Giới thiệu về bàn phím tốc ký</div>
                      <div class="sub-item" id="lesson-basic-3">Bài 3.Các quy tắc gõ tốc ký </div>

                      <div class="s-sub-item" id="lesson-basic-3-first-sound">Bài 3.1 Các quy tắc gõ âm đầu</div>
                      <div class="s-sub-item" id="lesson-basic-3-main-sound">Bài 3.2 Các quy tắc gõ âm chính</div>
                      <div class="s-sub-item" id="lesson-basic-3-end-sound">Bài 3.3 Các quy tắc gõ âm cuối </div>
      
                      <div class="navigation-bar-item" id="lesson-advanced-button">Bài học nâng cao</div>
      
                      <div class="navigation-bar-item" id="practice-button">Thực hành</div>
      
                      <div class="navigation-bar-item" id="game-button">Trò chơi</div>
      
                      <div class="navigation-bar-item" id="contract-button">Liên hệ </div>
      
                      <div class="navigation-bar-item" id="acoount-button">Tài khoản</div>
          </div>
      </div>
      <div class="rightside">
          <h1>Bài học cơ bản</h1>
          <div class="siteThemeColour" ></div>
          <div class="page-title">
              <h2>Bài 3.Các quy tắc gõ tốc ký</h2>
             <h3>Bài 3.2 các quy tắc gõ âm chính </h3>

             <div class="table-wrapper">
              <table class="fl-table">
                  <thead>
                  <tr>
                      <th>Số thứ tự </th>
                      <th>Âm đầu</th>
                      <th>Phím Sterno</th>
                  </tr>
                  </thead>
                  <tbody>        
                      <tr class="1-column-first odd" role="row">
                              <td class="index sorting_1">1</td>
                              <td class="value-word">uổ</td>
                              <td class="value-key-steno">-HSUO</td>
                          </tr><tr class="2-column-first even" role="row">
                              <td class="index sorting_1">2</td>
                              <td class="value-word">uỗ</td>
                              <td class="value-key-steno">N-SUO</td>
                          </tr><tr class="3-column-first odd" role="row">
                              <td class="index sorting_1">3</td>
                              <td class="value-word">ă</td>
                              <td class="value-key-steno">*-A</td>
                          </tr><tr class="4-column-first even" role="row">
                              <td class="index sorting_1">4</td>
                              <td class="value-word">uộ</td>
                              <td class="value-key-steno">N-UO</td>
                          </tr><tr class="5-column-first odd" role="row">
                              <td class="index sorting_1">5</td>
                              <td class="value-word">uớ</td>
                              <td class="value-key-steno">-SY</td>
                          </tr><tr class="6-column-first even" role="row">
                              <td class="index sorting_1">6</td>
                              <td class="value-word">uỳa</td>
                              <td class="value-key-steno">-HEY</td>
                          </tr><tr class="7-column-first odd" role="row">
                              <td class="index sorting_1">7</td>
                              <td class="value-word">uờ</td>
                              <td class="value-key-steno">-HY</td>
                          </tr><tr class="8-column-first even" role="row">
                              <td class="index sorting_1">8</td>
                              <td class="value-word">uở</td>
                              <td class="value-key-steno">-HSY</td>
                          </tr><tr class="9-column-first odd" role="row">
                              <td class="index sorting_1">9</td>
                              <td class="value-word">uỡ</td>
                              <td class="value-key-steno">N-SY</td>
                          </tr><tr class="10-column-first even" role="row">
                              <td class="index sorting_1">10</td>
                              <td class="value-word">uâ</td>
                              <td class="value-key-steno">*-Y</td>
                          </tr><tr class="11-column-first odd" role="row">
                              <td class="index sorting_1">11</td>
                              <td class="value-word">uợ</td>
                              <td class="value-key-steno">N-Y</td>
                          </tr><tr class="12-column-first even" role="row">
                              <td class="index sorting_1">12</td>
                              <td class="value-word">oạ</td>
                              <td class="value-key-steno">N-U</td>
                          </tr><tr class="13-column-first odd" role="row">
                              <td class="index sorting_1">13</td>
                              <td class="value-word">ía</td>
                              <td class="value-key-steno">-SIE</td>
                          </tr><tr class="14-column-first even" role="row">
                              <td class="index sorting_1">14</td>
                              <td class="value-word">oả</td>
                              <td class="value-key-steno">-HSU</td>
                          </tr><tr class="15-column-first odd" role="row">
                              <td class="index sorting_1">15</td>
                              <td class="value-word">uê</td>
                              <td class="value-key-steno">-UE</td>
                          </tr><tr class="16-column-first even" role="row">
                              <td class="index sorting_1">16</td>
                              <td class="value-word">ửa</td>
                              <td class="value-key-steno">-HSEW</td>
                          </tr><tr class="17-column-first odd" role="row">
                              <td class="index sorting_1">17</td>
                              <td class="value-word">ia</td>
                              <td class="value-key-steno">-IE</td>
                          </tr><tr class="18-column-first even" role="row">
                              <td class="index sorting_1">18</td>
                              <td class="value-word">ũa</td>
                              <td class="value-key-steno">N-SUO</td>
                          </tr><tr class="19-column-first odd" role="row">
                              <td class="index sorting_1">19</td>
                              <td class="value-word">uỳ</td>
                              <td class="value-key-steno">-HUY</td>
                          </tr><tr class="20-column-first even" role="row">
                              <td class="index sorting_1">20</td>
                              <td class="value-word">uô</td>
                              <td class="value-key-steno">-UO</td>
                          </tr><tr class="21-column-first odd" role="row">
                              <td class="index sorting_1">21</td>
                              <td class="value-word">ụa</td>
                              <td class="value-key-steno">N-UO</td>
                          </tr><tr class="22-column-first even" role="row">
                              <td class="index sorting_1">22</td>
                              <td class="value-word">oắ</td>
                              <td class="value-key-steno">-S*U</td>
                          </tr><tr class="23-column-first odd" role="row">
                              <td class="index sorting_1">23</td>
                              <td class="value-word">uỵ</td>
                              <td class="value-key-steno">N-UY</td>
                          </tr><tr class="24-column-first even" role="row">
                              <td class="index sorting_1">24</td>
                              <td class="value-word">oằ</td>
                              <td class="value-key-steno">-H*U</td>
                          </tr><tr class="25-column-first odd" role="row">
                              <td class="index sorting_1">25</td>
                              <td class="value-word">uỷ</td>
                              <td class="value-key-steno">-HSUY</td>
                          </tr><tr class="26-column-first even" role="row">
                              <td class="index sorting_1">26</td>
                              <td class="value-word">oẳ</td>
                              <td class="value-key-steno">-HS*U</td>
                          </tr><tr class="27-column-first odd" role="row">
                              <td class="index sorting_1">27</td>
                              <td class="value-word">uỹ</td>
                              <td class="value-key-steno">N-SUY</td>
                          </tr><tr class="28-column-first even" role="row">
                              <td class="index sorting_1">28</td>
                              <td class="value-word">oẵ</td>
                              <td class="value-key-steno">N-S*U</td>
                          </tr><tr class="29-column-first odd" role="row">
                              <td class="index sorting_1">29</td>
                              <td class="value-word">oặ</td>
                              <td class="value-key-steno">N*-U</td>
                          </tr><tr class="30-column-first even" role="row">
                              <td class="index sorting_1">30</td>
                              <td class="value-word">uý</td>
                              <td class="value-key-steno">-SUY</td>
                          </tr><tr class="31-column-first odd" role="row">
                              <td class="index sorting_1">31</td>
                              <td class="value-word">ĩ</td>
                              <td class="value-key-steno">N-S*I</td>
                          </tr><tr class="32-column-first even" role="row">
                              <td class="index sorting_1">32</td>
                              <td class="value-word">oẹ</td>
                              <td class="value-key-steno">N-AY</td>
                          </tr><tr class="33-column-first odd" role="row">
                              <td class="index sorting_1">33</td>
                              <td class="value-word">ướ</td>
                              <td class="value-key-steno">-SEW</td>
                          </tr><tr class="34-column-first even" role="row">
                              <td class="index sorting_1">34</td>
                              <td class="value-word">oẻ</td>
                              <td class="value-key-steno">-HSAY</td>
                          </tr><tr class="35-column-first odd" role="row">
                              <td class="index sorting_1">35</td>
                              <td class="value-word">ườ</td>
                              <td class="value-key-steno">-HEW</td>
                          </tr><tr class="36-column-first even" role="row">
                              <td class="index sorting_1">36</td>
                              <td class="value-word">oẽ</td>
                              <td class="value-key-steno">N-SAY</td>
                          </tr><tr class="37-column-first odd" role="row">
                              <td class="index sorting_1">37</td>
                              <td class="value-word">ưở</td>
                              <td class="value-key-steno">-HSEW</td>
                          </tr><tr class="38-column-first even" role="row">
                              <td class="index sorting_1">38</td>
                              <td class="value-word">ưỡ</td>
                              <td class="value-key-steno">N-SEW</td>
                          </tr><tr class="39-column-first odd" role="row">
                              <td class="index sorting_1">39</td>
                              <td class="value-word">ượ</td>
                              <td class="value-key-steno">N-EW</td>
                          </tr><tr class="40-column-first even" role="row">
                              <td class="index sorting_1">40</td>
                              <td class="value-word">uýa</td>
                              <td class="value-key-steno">-SEY</td>
                          </tr><tr class="41-column-first odd" role="row">
                              <td class="index sorting_1">41</td>
                              <td class="value-word">uya</td>
                              <td class="value-key-steno">-EY</td>
                          </tr><tr class="42-column-first even" role="row">
                              <td class="index sorting_1">42</td>
                              <td class="value-word">oọ</td>
                              <td class="value-key-steno">N*-O</td>
                          </tr><tr class="43-column-first odd" role="row">
                              <td class="index sorting_1">43</td>
                              <td class="value-word">uỵa</td>
                              <td class="value-key-steno">N-EY</td>
                          </tr><tr class="44-column-first even" role="row">
                              <td class="index sorting_1">44</td>
                              <td class="value-word">ữa</td>
                              <td class="value-key-steno">N-SEW</td>
                          </tr><tr class="45-column-first odd" role="row">
                              <td class="index sorting_1">45</td>
                              <td class="value-word">oà</td>
                              <td class="value-key-steno">-HU</td>
                          </tr><tr class="46-column-first even" role="row">
                              <td class="index sorting_1">46</td>
                              <td class="value-word">oá</td>
                              <td class="value-key-steno">-SU</td>
                          </tr><tr class="47-column-first odd" role="row">
                              <td class="index sorting_1">47</td>
                              <td class="value-word">oã</td>
                              <td class="value-key-steno">N-SU</td>
                          </tr><tr class="48-column-first even" role="row">
                              <td class="index sorting_1">48</td>
                              <td class="value-word">ĩa</td>
                              <td class="value-key-steno">N-SIE</td>
                          </tr><tr class="49-column-first odd" role="row">
                              <td class="index sorting_1">49</td>
                              <td class="value-word">oè</td>
                              <td class="value-key-steno">-HAY</td>
                          </tr><tr class="50-column-first even" role="row">
                              <td class="index sorting_1">50</td>
                              <td class="value-word">ủa</td>
                              <td class="value-key-steno">-HSUO</td>
                          </tr><tr class="51-column-first odd" role="row">
                              <td class="index sorting_1">51</td>
                              <td class="value-word">oé</td>
                              <td class="value-key-steno">-SAY</td>
                          </tr><tr class="52-column-first even" role="row">
                              <td class="index sorting_1">52</td>
                              <td class="value-word">a</td>
                              <td class="value-key-steno">-A</td>
                          </tr><tr class="53-column-first odd" role="row">
                              <td class="index sorting_1">53</td>
                              <td class="value-word">oò</td>
                              <td class="value-key-steno">-H*O</td>
                          </tr><tr class="54-column-first even" role="row">
                              <td class="index sorting_1">54</td>
                              <td class="value-word">oó</td>
                              <td class="value-key-steno">-S*O</td>
                          </tr><tr class="55-column-first odd" role="row">
                              <td class="index sorting_1">55</td>
                              <td class="value-word">e</td>
                              <td class="value-key-steno">-E</td>
                          </tr><tr class="56-column-first even" role="row">
                              <td class="index sorting_1">56</td>
                              <td class="value-word">yế</td>
                              <td class="value-key-steno">-SIE</td>
                          </tr><tr class="57-column-first odd" role="row">
                              <td class="index sorting_1">57</td>
                              <td class="value-word">yề</td>
                              <td class="value-key-steno">-HIE</td>
                          </tr><tr class="58-column-first even" role="row">
                              <td class="index sorting_1">58</td>
                              <td class="value-word">i</td>
                              <td class="value-key-steno">*-I</td>
                          </tr><tr class="59-column-first odd" role="row">
                              <td class="index sorting_1">59</td>
                              <td class="value-word">ũ</td>
                              <td class="value-key-steno">N-SIU</td>
                          </tr><tr class="60-column-first even" role="row">
                              <td class="index sorting_1">60</td>
                              <td class="value-word">yể</td>
                              <td class="value-key-steno">-HSIE</td>
                          </tr><tr class="61-column-first odd" role="row">
                              <td class="index sorting_1">61</td>
                              <td class="value-word">yễ</td>
                              <td class="value-key-steno">N-SIE</td>
                          </tr><tr class="62-column-first even" role="row">
                              <td class="index sorting_1">62</td>
                              <td class="value-word">yệ</td>
                              <td class="value-key-steno">N-IE</td>
                          </tr><tr class="63-column-first odd" role="row">
                              <td class="index sorting_1">63</td>
                              <td class="value-word">o</td>
                              <td class="value-key-steno">-O</td>
                          </tr><tr class="64-column-first even" role="row">
                              <td class="index sorting_1">64</td>
                              <td class="value-word">oă</td>
                              <td class="value-key-steno">*-U</td>
                          </tr><tr class="65-column-first odd" role="row">
                              <td class="index sorting_1">65</td>
                              <td class="value-word">u</td>
                              <td class="value-key-steno">-IU</td>
                          </tr><tr class="66-column-first even" role="row">
                              <td class="index sorting_1">66</td>
                              <td class="value-word">iế</td>
                              <td class="value-key-steno">-SIE</td>
                          </tr><tr class="67-column-first odd" role="row">
                              <td class="index sorting_1">67</td>
                              <td class="value-word">iề</td>
                              <td class="value-key-steno">-HIE</td>
                          </tr><tr class="68-column-first even" role="row">
                              <td class="index sorting_1">68</td>
                              <td class="value-word">y</td>
                              <td class="value-key-steno">-I</td>
                          </tr><tr class="69-column-first odd" role="row">
                              <td class="index sorting_1">69</td>
                              <td class="value-word">uỷa</td>
                              <td class="value-key-steno">-HSEY</td>
                          </tr><tr class="70-column-first even" role="row">
                              <td class="index sorting_1">70</td>
                              <td class="value-word">iể</td>
                              <td class="value-key-steno">-HSIE</td>
                          </tr><tr class="71-column-first odd" role="row">
                              <td class="index sorting_1">71</td>
                              <td class="value-word">iễ</td>
                              <td class="value-key-steno">N-SIE</td>
                          </tr><tr class="72-column-first even" role="row">
                              <td class="index sorting_1">72</td>
                              <td class="value-word">iệ</td>
                              <td class="value-key-steno">N-IE</td>
                          </tr><tr class="73-column-first odd" role="row">
                              <td class="index sorting_1">73</td>
                              <td class="value-word">ùa</td>
                              <td class="value-key-steno">-HUO</td>
                          </tr><tr class="74-column-first even" role="row">
                              <td class="index sorting_1">74</td>
                              <td class="value-word">ua</td>
                              <td class="value-key-steno">-UO</td>
                          </tr><tr class="75-column-first odd" role="row">
                              <td class="index sorting_1">75</td>
                              <td class="value-word">yê</td>
                              <td class="value-key-steno">-IE</td>
                          </tr><tr class="76-column-first even" role="row">
                              <td class="index sorting_1">76</td>
                              <td class="value-word">ựa</td>
                              <td class="value-key-steno">N-EW</td>
                          </tr><tr class="77-column-first odd" role="row">
                              <td class="index sorting_1">77</td>
                              <td class="value-word">uyế</td>
                              <td class="value-key-steno">-SEY</td>
                          </tr><tr class="78-column-first even" role="row">
                              <td class="index sorting_1">78</td>
                              <td class="value-word">ứa</td>
                              <td class="value-key-steno">-SEW</td>
                          </tr><tr class="79-column-first odd" role="row">
                              <td class="index sorting_1">79</td>
                              <td class="value-word">uyề</td>
                              <td class="value-key-steno">-HEY</td>
                          </tr><tr class="80-column-first even" role="row">
                              <td class="index sorting_1">80</td>
                              <td class="value-word">uyể</td>
                              <td class="value-key-steno">-HSEY</td>
                          </tr><tr class="81-column-first odd" role="row">
                              <td class="index sorting_1">81</td>
                              <td class="value-word">uyễ</td>
                              <td class="value-key-steno">N-SEY</td>
                          </tr><tr class="82-column-first even" role="row">
                              <td class="index sorting_1">82</td>
                              <td class="value-word">iê</td>
                              <td class="value-key-steno">-IE</td>
                          </tr><tr class="83-column-first odd" role="row">
                              <td class="index sorting_1">83</td>
                              <td class="value-word">ơ</td>
                              <td class="value-key-steno">-W</td>
                          </tr><tr class="84-column-first even" role="row">
                              <td class="index sorting_1">84</td>
                              <td class="value-word">ạ</td>
                              <td class="value-key-steno">N-A</td>
                          </tr><tr class="85-column-first odd" role="row">
                              <td class="index sorting_1">85</td>
                              <td class="value-word">uyệ</td>
                              <td class="value-key-steno">N-EY</td>
                          </tr><tr class="86-column-first even" role="row">
                              <td class="index sorting_1">86</td>
                              <td class="value-word">ả</td>
                              <td class="value-key-steno">-HSA</td>
                          </tr><tr class="87-column-first odd" role="row">
                              <td class="index sorting_1">87</td>
                              <td class="value-word">uy</td>
                              <td class="value-key-steno">-UY</td>
                          </tr><tr class="88-column-first even" role="row">
                              <td class="index sorting_1">88</td>
                              <td class="value-word">ấ</td>
                              <td class="value-key-steno">-S*W</td>
                          </tr><tr class="89-column-first odd" role="row">
                              <td class="index sorting_1">89</td>
                              <td class="value-word">ầ</td>
                              <td class="value-key-steno">-H*W</td>
                          </tr><tr class="90-column-first even" role="row">
                              <td class="index sorting_1">90</td>
                              <td class="value-word">úa</td>
                              <td class="value-key-steno">-SUO</td>
                          </tr><tr class="91-column-first odd" role="row">
                              <td class="index sorting_1">91</td>
                              <td class="value-word">ẩ</td>
                              <td class="value-key-steno">-HS*W</td>
                          </tr><tr class="92-column-first even" role="row">
                              <td class="index sorting_1">92</td>
                              <td class="value-word">ẫ</td>
                              <td class="value-key-steno">N-S*W</td>
                          </tr><tr class="93-column-first odd" role="row">
                              <td class="index sorting_1">93</td>
                              <td class="value-word">ậ</td>
                              <td class="value-key-steno">N*-W</td>
                          </tr><tr class="94-column-first even" role="row">
                              <td class="index sorting_1">94</td>
                              <td class="value-word">ắ</td>
                              <td class="value-key-steno">-S*A</td>
                          </tr><tr class="95-column-first odd" role="row">
                              <td class="index sorting_1">95</td>
                              <td class="value-word">ư</td>
                              <td class="value-key-steno">-UW</td>
                          </tr><tr class="96-column-first even" role="row">
                              <td class="index sorting_1">96</td>
                              <td class="value-word">ưa</td>
                              <td class="value-key-steno">-EW</td>
                          </tr><tr class="97-column-first odd" role="row">
                              <td class="index sorting_1">97</td>
                              <td class="value-word">ằ</td>
                              <td class="value-key-steno">-H*A</td>
                          </tr><tr class="98-column-first even" role="row">
                              <td class="index sorting_1">98</td>
                              <td class="value-word">ẳ</td>
                              <td class="value-key-steno">-HS*A</td>
                          </tr><tr class="99-column-first odd" role="row">
                              <td class="index sorting_1">99</td>
                              <td class="value-word">ẵ</td>
                              <td class="value-key-steno">N-S*A</td>
                          </tr><tr class="100-column-first even" role="row">
                              <td class="index sorting_1">100</td>
                              <td class="value-word">ặ</td>
                              <td class="value-key-steno">N*-A</td>
                          </tr><tr class="101-column-first odd" role="row">
                              <td class="index sorting_1">101</td>
                              <td class="value-word">uỹa</td>
                              <td class="value-key-steno">N-SEY</td>
                          </tr><tr class="102-column-first even" role="row">
                              <td class="index sorting_1">102</td>
                              <td class="value-word">ẹ</td>
                              <td class="value-key-steno">N-E</td>
                          </tr><tr class="103-column-first odd" role="row">
                              <td class="index sorting_1">103</td>
                              <td class="value-word">ẻ</td>
                              <td class="value-key-steno">-HSE</td>
                          </tr><tr class="104-column-first even" role="row">
                              <td class="index sorting_1">104</td>
                              <td class="value-word">ỉa</td>
                              <td class="value-key-steno">-HSIE</td>
                          </tr><tr class="105-column-first odd" role="row">
                              <td class="index sorting_1">105</td>
                              <td class="value-word">ẽ</td>
                              <td class="value-key-steno">N-SE</td>
                          </tr><tr class="106-column-first even" role="row">
                              <td class="index sorting_1">106</td>
                              <td class="value-word">ế</td>
                              <td class="value-key-steno">-SOE</td>
                          </tr><tr class="107-column-first odd" role="row">
                              <td class="index sorting_1">107</td>
                              <td class="value-word">ề</td>
                              <td class="value-key-steno">-HOE</td>
                          </tr><tr class="108-column-first even" role="row">
                              <td class="index sorting_1">108</td>
                              <td class="value-word">ể</td>
                              <td class="value-key-steno">-HSOE</td>
                          </tr><tr class="109-column-first odd" role="row">
                              <td class="index sorting_1">109</td>
                              <td class="value-word">ễ</td>
                              <td class="value-key-steno">N-SOE</td>
                          </tr><tr class="110-column-first even" role="row">
                              <td class="index sorting_1">110</td>
                              <td class="value-word">ệ</td>
                              <td class="value-key-steno">N-OE</td>
                          </tr><tr class="111-column-first odd" role="row">
                              <td class="index sorting_1">111</td>
                              <td class="value-word">uyê</td>
                              <td class="value-key-steno">-EY</td>
                          </tr><tr class="112-column-first even" role="row">
                              <td class="index sorting_1">112</td>
                              <td class="value-word">ỉ</td>
                              <td class="value-key-steno">-HS*I</td>
                          </tr><tr class="113-column-first odd" role="row">
                              <td class="index sorting_1">113</td>
                              <td class="value-word">ị</td>
                              <td class="value-key-steno">N*-I</td>
                          </tr><tr class="114-column-first even" role="row">
                              <td class="index sorting_1">114</td>
                              <td class="value-word">uơ</td>
                              <td class="value-key-steno">-Y</td>
                          </tr><tr class="115-column-first odd" role="row">
                              <td class="index sorting_1">115</td>
                              <td class="value-word">ọ</td>
                              <td class="value-key-steno">N-O</td>
                          </tr><tr class="116-column-first even" role="row">
                              <td class="index sorting_1">116</td>
                              <td class="value-word">ỏ</td>
                              <td class="value-key-steno">-HSO</td>
                          </tr><tr class="117-column-first odd" role="row">
                              <td class="index sorting_1">117</td>
                              <td class="value-word">uấ</td>
                              <td class="value-key-steno">-S*Y</td>
                          </tr><tr class="118-column-first even" role="row">
                              <td class="index sorting_1">118</td>
                              <td class="value-word">ố</td>
                              <td class="value-key-steno">-SOW</td>
                          </tr><tr class="119-column-first odd" role="row">
                              <td class="index sorting_1">119</td>
                              <td class="value-word">oa</td>
                              <td class="value-key-steno">-U</td>
                          </tr><tr class="120-column-first even" role="row">
                              <td class="index sorting_1">120</td>
                              <td class="value-word">uầ</td>
                              <td class="value-key-steno">-H*Y</td>
                          </tr><tr class="121-column-first odd" role="row">
                              <td class="index sorting_1">121</td>
                              <td class="value-word">ồ</td>
                              <td class="value-key-steno">-HOW</td>
                          </tr><tr class="122-column-first even" role="row">
                              <td class="index sorting_1">122</td>
                              <td class="value-word">uẩ</td>
                              <td class="value-key-steno">-HS*Y</td>
                          </tr><tr class="123-column-first odd" role="row">
                              <td class="index sorting_1">123</td>
                              <td class="value-word">ừa</td>
                              <td class="value-key-steno">-HEW</td>
                          </tr><tr class="124-column-first even" role="row">
                              <td class="index sorting_1">124</td>
                              <td class="value-word">ổ</td>
                              <td class="value-key-steno">-HSOW</td>
                          </tr><tr class="125-column-first odd" role="row">
                              <td class="index sorting_1">125</td>
                              <td class="value-word">oe</td>
                              <td class="value-key-steno">-AY</td>
                          </tr><tr class="126-column-first even" role="row">
                              <td class="index sorting_1">126</td>
                              <td class="value-word">uẫ</td>
                              <td class="value-key-steno">N-S*Y</td>
                          </tr><tr class="127-column-first odd" role="row">
                              <td class="index sorting_1">127</td>
                              <td class="value-word">ỗ</td>
                              <td class="value-key-steno">N-SOW</td>
                          </tr><tr class="128-column-first even" role="row">
                              <td class="index sorting_1">128</td>
                              <td class="value-word">uậ</td>
                              <td class="value-key-steno">N*-Y</td>
                          </tr><tr class="129-column-first odd" role="row">
                              <td class="index sorting_1">129</td>
                              <td class="value-word">ộ</td>
                              <td class="value-key-steno">N-OW</td>
                          </tr><tr class="130-column-first even" role="row">
                              <td class="index sorting_1">130</td>
                              <td class="value-word">ớ</td>
                              <td class="value-key-steno">-SW</td>
                          </tr><tr class="131-column-first odd" role="row">
                              <td class="index sorting_1">131</td>
                              <td class="value-word">ờ</td>
                              <td class="value-key-steno">-HW</td>
                          </tr><tr class="132-column-first even" role="row">
                              <td class="index sorting_1">132</td>
                              <td class="value-word">ở</td>
                              <td class="value-key-steno">-HSW</td>
                          </tr><tr class="133-column-first odd" role="row">
                              <td class="index sorting_1">133</td>
                              <td class="value-word">à</td>
                              <td class="value-key-steno">-HA</td>
                          </tr><tr class="134-column-first even" role="row">
                              <td class="index sorting_1">134</td>
                              <td class="value-word">oo</td>
                              <td class="value-key-steno">*-O</td>
                          </tr><tr class="135-column-first odd" role="row">
                              <td class="index sorting_1">135</td>
                              <td class="value-word">ỡ</td>
                              <td class="value-key-steno">N-SW</td>
                          </tr><tr class="136-column-first even" role="row">
                              <td class="index sorting_1">136</td>
                              <td class="value-word">á</td>
                              <td class="value-key-steno">-SA</td>
                          </tr><tr class="137-column-first odd" role="row">
                              <td class="index sorting_1">137</td>
                              <td class="value-word">â</td>
                              <td class="value-key-steno">*-W</td>
                          </tr><tr class="138-column-first even" role="row">
                              <td class="index sorting_1">138</td>
                              <td class="value-word">ợ</td>
                              <td class="value-key-steno">N-W</td>
                          </tr><tr class="139-column-first odd" role="row">
                              <td class="index sorting_1">139</td>
                              <td class="value-word">ã</td>
                              <td class="value-key-steno">N-SA</td>
                          </tr><tr class="140-column-first even" role="row">
                              <td class="index sorting_1">140</td>
                              <td class="value-word">ụ</td>
                              <td class="value-key-steno">N-IU</td>
                          </tr><tr class="141-column-first odd" role="row">
                              <td class="index sorting_1">141</td>
                              <td class="value-word">ủ</td>
                              <td class="value-key-steno">-HSIU</td>
                          </tr><tr class="142-column-first even" role="row">
                              <td class="index sorting_1">142</td>
                              <td class="value-word">è</td>
                              <td class="value-key-steno">-HE</td>
                          </tr><tr class="143-column-first odd" role="row">
                              <td class="index sorting_1">143</td>
                              <td class="value-word">é</td>
                              <td class="value-key-steno">-SE</td>
                          </tr><tr class="144-column-first even" role="row">
                              <td class="index sorting_1">144</td>
                              <td class="value-word">ứ</td>
                              <td class="value-key-steno">-SUW</td>
                          </tr><tr class="145-column-first odd" role="row">
                              <td class="index sorting_1">145</td>
                              <td class="value-word">ê</td>
                              <td class="value-key-steno">-OE</td>
                          </tr><tr class="146-column-first even" role="row">
                              <td class="index sorting_1">146</td>
                              <td class="value-word">uế</td>
                              <td class="value-key-steno">-SUE</td>
                          </tr><tr class="147-column-first odd" role="row">
                              <td class="index sorting_1">147</td>
                              <td class="value-word">ừ</td>
                              <td class="value-key-steno">-HUW</td>
                          </tr><tr class="148-column-first even" role="row">
                              <td class="index sorting_1">148</td>
                              <td class="value-word">ì</td>
                              <td class="value-key-steno">-H*I</td>
                          </tr><tr class="149-column-first odd" role="row">
                              <td class="index sorting_1">149</td>
                              <td class="value-word">uề</td>
                              <td class="value-key-steno">-HUE</td>
                          </tr><tr class="150-column-first even" role="row">
                              <td class="index sorting_1">150</td>
                              <td class="value-word">í</td>
                              <td class="value-key-steno">-S*I</td>
                          </tr><tr class="151-column-first odd" role="row">
                              <td class="index sorting_1">151</td>
                              <td class="value-word">ử</td>
                              <td class="value-key-steno">-HSUW</td>
                          </tr><tr class="152-column-first even" role="row">
                              <td class="index sorting_1">152</td>
                              <td class="value-word">uể</td>
                              <td class="value-key-steno">-HSUE</td>
                          </tr><tr class="153-column-first odd" role="row">
                              <td class="index sorting_1">153</td>
                              <td class="value-word">ữ</td>
                              <td class="value-key-steno">N-SUW</td>
                          </tr><tr class="154-column-first even" role="row">
                              <td class="index sorting_1">154</td>
                              <td class="value-word">uễ</td>
                              <td class="value-key-steno">N-SUE</td>
                          </tr><tr class="155-column-first odd" role="row">
                              <td class="index sorting_1">155</td>
                              <td class="value-word">ự</td>
                              <td class="value-key-steno">N-UW</td>
                          </tr><tr class="156-column-first even" role="row">
                              <td class="index sorting_1">156</td>
                              <td class="value-word">ươ</td>
                              <td class="value-key-steno">-EW</td>
                          </tr><tr class="157-column-first odd" role="row">
                              <td class="index sorting_1">157</td>
                              <td class="value-word">ò</td>
                              <td class="value-key-steno">-HO</td>
                          </tr><tr class="158-column-first even" role="row">
                              <td class="index sorting_1">158</td>
                              <td class="value-word">uệ</td>
                              <td class="value-key-steno">N-UE</td>
                          </tr><tr class="159-column-first odd" role="row">
                              <td class="index sorting_1">159</td>
                              <td class="value-word">ỳ</td>
                              <td class="value-key-steno">-HI</td>
                          </tr><tr class="160-column-first even" role="row">
                              <td class="index sorting_1">160</td>
                              <td class="value-word">ó</td>
                              <td class="value-key-steno">-SO</td>
                          </tr><tr class="161-column-first odd" role="row">
                              <td class="index sorting_1">161</td>
                              <td class="value-word">ô</td>
                              <td class="value-key-steno">-OW</td>
                          </tr><tr class="162-column-first even" role="row">
                              <td class="index sorting_1">162</td>
                              <td class="value-word">ỵ</td>
                              <td class="value-key-steno">N-I</td>
                          </tr><tr class="163-column-first odd" role="row">
                              <td class="index sorting_1">163</td>
                              <td class="value-word">ìa</td>
                              <td class="value-key-steno">-HIE</td>
                          </tr><tr class="164-column-first even" role="row">
                              <td class="index sorting_1">164</td>
                              <td class="value-word">ịa</td>
                              <td class="value-key-steno">N-IE</td>
                          </tr><tr class="165-column-first odd" role="row">
                              <td class="index sorting_1">165</td>
                              <td class="value-word">õ</td>
                              <td class="value-key-steno">N-SO</td>
                          </tr><tr class="166-column-first even" role="row">
                              <td class="index sorting_1">166</td>
                              <td class="value-word">ỷ</td>
                              <td class="value-key-steno">-HSI</td>
                          </tr><tr class="167-column-first odd" role="row">
                              <td class="index sorting_1">167</td>
                              <td class="value-word">ỹ</td>
                              <td class="value-key-steno">N-SI</td>
                          </tr><tr class="168-column-first even" role="row">
                              <td class="index sorting_1">168</td>
                              <td class="value-word">ù</td>
                              <td class="value-key-steno">-HIU</td>
                          </tr><tr class="169-column-first odd" role="row">
                              <td class="index sorting_1">169</td>
                              <td class="value-word">ú</td>
                              <td class="value-key-steno">-SIU</td>
                          </tr><tr class="170-column-first even" role="row">
                              <td class="index sorting_1">170</td>
                              <td class="value-word">uố</td>
                              <td class="value-key-steno">-SUO</td>
                          </tr><tr class="171-column-first odd" role="row">
                              <td class="index sorting_1">171</td>
                              <td class="value-word">ý</td>
                              <td class="value-key-steno">-SI</td>
                          </tr><tr class="172-column-first even" role="row">
                              <td class="index sorting_1">172</td>
                              <td class="value-word">uồ</td>
                              <td class="value-key-steno">-HUO</td>
                          </tr></tbody>
              </table>
          </div>
          
          </div>
          <div id="next-prev-button" >
              <div id='btn-prev'>
              <input class='next-prev-button' type="button" value='Bài học trước' />
          </div>
          <div id='btn-next'>
              <input class='next-prev-button' type='button' value='Bài học tiếp theo' />
          </div> 
      </div>
  </div>
  </div>
<div class="about-us"> About us </div>
</div>
  `,

  lesson_basic_end_sound_rule:
  `
  <div id="lesson-basic-page3-3">
            <div class="container">
                <div class= "leftside-bar">
                    <div class="navigationMenu">
                                <div class="navigation-bar-item" id="home-page-button">Trang chủ</div>
                
                                <div  class="navigation-bar-item" id="lesson-basic-button">Bài học cơ bản</div>
          
                                <div class="sub-item" id="lesson-basic-1">Bài 1.Giới thiệu về gõ tốc ký</div>
                                <div class="sub-item" id="lesson-basic-2">Bài 2.Giới thiệu về bàn phím tốc ký</div>
                                <div class="sub-item" id="lesson-basic-3">Bài 3.Các quy tắc gõ tốc ký </div>
          
                                <div class="s-sub-item" id="lesson-basic-3-first-sound">Bài 3.1 Các quy tắc gõ âm đầu</div>
                                <div class="s-sub-item" id="lesson-basic-3-main-sound">Bài 3.2 Các quy tắc gõ âm chính</div>
                                <div class="s-sub-item" id="lesson-basic-3-end-sound">Bài 3.3 Các quy tắc gõ âm cuối </div>
                
                                <div class="navigation-bar-item" id="lesson-advanced-button">Bài học nâng cao</div>
                
                                <div class="navigation-bar-item" id="practice-button">Thực hành</div>
                
                                <div class="navigation-bar-item" id="game-button">Trò chơi</div>
                
                                <div class="navigation-bar-item" id="contract-button">Liên hệ </div>
                
                                <div class="navigation-bar-item" id="acoount-button">Tài khoản</div>
                    </div>
                </div>
                <div class="rightside">
                    <h1>Bài học cơ bản</h1>
                    <div class="siteThemeColour" ></div>
                    <div class="page-title">
                        <h2>Bài 3.Các quy tắc gõ tốc ký</h2>
                       <h3>Bài 3.2 các quy tắc gõ âm cuối</h3>
        
                       <div class="table-wrapper">
                        <table class="fl-table">
                            <thead>
                            <tr>
                                <th>Số thứ tự </th>
                                <th>Âm đầu</th>
                                <th>Phím Sterno</th>
                            </tr>
                            </thead>
                            <tbody>     
                                <tr class="1-column-first odd" role="row">
                                        <td class="index sorting_1">1</td>
                                        <td class="value-word">p</td>
                                        <td class="value-key-steno">-TK</td>
                                    </tr><tr class="2-column-first even" role="row">
                                        <td class="index sorting_1">2</td>
                                        <td class="value-word">c</td>
                                        <td class="value-key-steno">-NK</td>
                                    </tr><tr class="3-column-first odd" role="row">
                                        <td class="index sorting_1">3</td>
                                        <td class="value-word">t</td>
                                        <td class="value-key-steno">-NT</td>
                                    </tr><tr class="4-column-first even" role="row">
                                        <td class="index sorting_1">4</td>
                                        <td class="value-word">ch</td>
                                        <td class="value-key-steno">-GK</td>
                                    </tr><tr class="5-column-first odd" role="row">
                                        <td class="index sorting_1">5</td>
                                        <td class="value-word">u</td>
                                        <td class="value-key-steno">-JG</td>
                                    </tr><tr class="6-column-first even" role="row">
                                        <td class="index sorting_1">6</td>
                                        <td class="value-word">ng</td>
                                        <td class="value-key-steno">-G</td>
                                    </tr><tr class="7-column-first odd" role="row">
                                        <td class="index sorting_1">7</td>
                                        <td class="value-word">i</td>
                                        <td class="value-key-steno">-J</td>
                                    </tr><tr class="8-column-first even" role="row">
                                        <td class="index sorting_1">8</td>
                                        <td class="value-word">y</td>
                                        <td class="value-key-steno">-JN</td>
                                    </tr><tr class="9-column-first odd" role="row">
                                        <td class="index sorting_1">9</td>
                                        <td class="value-word">nh</td>
                                        <td class="value-key-steno">-K</td>
                                    </tr><tr class="10-column-first even" role="row">
                                        <td class="index sorting_1">10</td>
                                        <td class="value-word">m</td>
                                        <td class="value-key-steno">-T</td>
                                    </tr><tr class="11-column-first odd" role="row">
                                        <td class="index sorting_1">11</td>
                                        <td class="value-word">n</td>
                                        <td class="value-key-steno">-N</td>
                                    </tr><tr class="12-column-first even" role="row">
                                        <td class="index sorting_1">12</td>
                                        <td class="value-word">o</td>
                                        <td class="value-key-steno">-JK</td>
                                    </tr></tbody>
                        </table>
                    </div>
                    
                    </div>
                    <div id="next-prev-button" >
                        <div id='btn-prev'>
                        <input class='next-prev-button' type="button" value='Bài học trước' />
                    </div>
                    <div id='btn-next'>
                        <input class='next-prev-button' type='button' value='Bài học tiếp theo' />
                    </div> 
                </div>
            </div>
            </div>
          <div class="about-us"> About us </div>
          </div>
  `,
lesson_advance_page:
  `
  <div id="lesson-advance-page">
  <div class="container">
      <div class= "leftside-bar">
          <div class="navigationMenu">
                      <div class="navigation-bar-item" id="home-page-button">Trang chủ</div>
      
                      <div  class="navigation-bar-item" id="lesson-basic-button">Bài học cơ bản</div>
      
                      <div class="navigation-bar-item" id="lesson-advanced-button">Bài học nâng cao</div>
                          <div class="sub-item" id="lesson-advance-1">Bài 1</div>
                          <div class="sub-item" id="lesson-advance-2">Bài 2</div>
                          <div class="sub-item" id="lesson-advance-3">Bài 3 </div>
                          <div class="sub-item" id="lesson-advance-4">Bài 4 </div>
                          <div class="sub-item" id="lesson-advance-5">Bài 5 </div>

                      <div class="navigation-bar-item" id="practice-button">Thực hành</div>
      
                      <div class="navigation-bar-item" id="game-button">Trò chơi</div>
      
                      <div class="navigation-bar-item" id="contract-button">Liên hệ </div>
      
                      <div class="navigation-bar-item" id="acoount-button">Tài khoản</div>
          </div>
      </div>
      <div class="rightside">
          <h1>Bài học nâng cao</h2>
          <div class="siteThemeColour" ></div>
          <div class="page-container">
              <div class='main-container'>
                <div class ="lesson-design" id="lesson-advance-1"> Bài 1 </div>
                <div class ="lesson-design" id="lesson-advance-2"> Bài 2 </div>
                <div class ="lesson-design" id="lesson-advance-3"> Bài 3 </div>
                <div class ="lesson-design" id="lesson-advance-4"> Bài 4 </div>
                <div class ="lesson-design" id="lesson-advance-5"> Bài 5 </div>
                <div class ="lesson-design" id="lesson-advance-6"> Bài 6 </div>
              </div>
          </div>
      
  </div>
  </div>
  <div class="about-us"> About us </div>
  </div>
  `,

  // lesson_advance_page1 html
  lesson_advance_page1:`
  <div id="lesson-advance-page1">
            <div class="container">
                <div class= "leftside-bar">
                    <div class="navigationMenu">
                                <div class="navigation-bar-item" id="home-page-button">Trang chủ</div>
                
                                <div  class="navigation-bar-item" id="lesson-basic-button">Bài học cơ bản</div>
                
                                <div class="navigation-bar-item" id="lesson-advanced-button">Bài học nâng cao</div>
                                    <div class="sub-item" id="lesson-basic-1">Bài 1.Học gõ các nguyên âm </div>
                                        <div class="sub-item-child"  id="lesson-basic-1-theory">Bài 1.1 Các cách gõ các âm chính không có dấu </div>
                                        <div class="sub-item-child" id="lesson-basic-1-practice" >Bài 1.2 Luyện tập gõ âm chính không có dấu </div>
                                    <div class="sub-item" id="lesson-basic-2">Bài 2.Giới thiệu về bàn phím tốc ký</div>
                                    <div class="sub-item" id="lesson-basic-3">Bài 3.Các quy tắc gõ tốc ký </div>
                
                                <div class="navigation-bar-item" id="practice-button">Thực hành</div>
                
                                <div class="navigation-bar-item" id="game-button">Trò chơi</div>
                
                                <div class="navigation-bar-item" id="contract-button">Liên hệ </div>
                
                                <div class="navigation-bar-item" id="acoount-button">Tài khoản</div>
                    </div>
                </div>
                <div class="rightside">
                    <h1>Bài học nâng cao</h1>
                    <div class="siteThemeColour" ></div>
                    <div class="page-title">
                        <div class='main-contain'>
                            <h2>Bài 1.Học gõ các nguyên âm</h2>
                            <h3>Bài 1.1 Các cách gõ các âm chính không có dấu</h3>
                            <h3>Bài 1.2 Luyện tập gõ âm chính không có dấu</h3>
                        </div> 
                            
                    </div>
                <div id="next-prev-button" >
                    <div id='btn-prev'>
                    <input class='next-prev-button' type="button" value='Bài học trước' />
                </div>
                <div id='btn-next'>
                    <input class='next-prev-button' type='button' value='Bài học tiếp theo' />
                </div> 
            </div>
            </div>
            
          <div class="about-us"> About us </div>
          </div>`,


//  register html 
    register: `        
    <div id='register-screen'>
    <div id='register-screen-content'>
      <div id='logo'>
        <h1>Phần mềm học gõ tốc ký </h1>
        <h1> Đăng ký </h1>
      </div>

      <div id='register-form'>
        <form id='form-wrapper'>
          <div id='name-wrapper'>
            <div class='input-wrapper'>
              <input
                class='input'
                type='text'
                name='firstName'
                placeholder='First name'
              />
              <div class='error-message' id='firstName-error-message'></div>
            </div>

            <div class='input-wrapper'>
              <input
                class='input'
                type='text'
                name='lastName'
                placeholder='Last name'
              />
              <div class='error-message' id='lastName-error-message'></div>
            </div>
          </div>

          <div class='input-wrapper'>
            <input
              class='input'
              type='text'
              name='email'
              placeholder='Email address'
            />
            <div class='error-message' id='email-error-message'></div>
          </div>

          <div class='input-wrapper'>
            <input
              class='input'
              type='password'
              name='password'
              placeholder='Password'
            />
            <div class='error-message' id='password-error-message'></div>
          </div>

          <div class='input-wrapper'>
            <input
              class='input'
              type='password'
              name='confirmPassword'
              placeholder='Confirm password'
            />
            <div class='error-message' id='confirm-error-message'></div>
          </div>

          <div id='form-footer'>
            <div id='already-have-account-button' >
                Đã có tài khoản? Đăng nhập ngay.
            </div>
          </div>
          <div id="btn_register">
            <input class='button' type='submit' value='Đăng ký' />
          </div>
        </form>
      </div>
    </div>
  </div>`,

    login: `
    <div id='login-screen'>
    <div id='login-screen-content'>
      <div id='logo'>
        <h2>Phần mềm học gõ tốc ký </h2>
        <h2> Login</h2>
      </div>
      <div id='login-form'>
        <form id='form-wrapper'>
          <div class='input-wrapper'>
            <input
              class='input'
              type='text'
              name='email'
              placeholder='Email address'
            />
            <div class='error-message' id='email-error-message'></div>
          </div>

          <div class='input-wrapper'>
            <input
              class='input'
              type='password'
              name='password'
              placeholder='Password'
            />
            <div class='error-message' id='password-error-message'></div>
          </div>

          <div id='form-footer'>
            <div id='create-account-button'> Bạn chưa có tài khoản ? Đăng ký ngay. </div>
          </div>
          <div id='btn-login'>
            <input class='button' type='submit' value='Đăng nhập' />
        </div>
        </form>
        <div id='login-other-icon' >
            <img class='icon-login' id='facebook-icon-login' src="../Images/facebook.svg">
        </img>
            <img class='icon-login' id='twitter-icon-login' src="../Images/twitter.svg">
            </img>
            <img class='icon-login' id='google-icon-login' src="../Images/google.svg">
            
            </img>
        </div>
      </div>
    </div>
  </div>
    `,
    
    home:`
    <div id="home-page">
    <div class="container">
        <div class= "leftside-bar">
            <div class="navigationMenu">
        
                        <div class="navigation-bar-item" id="home-page-button">Trang chủ</div>
        
                        <div  class="navigation-bar-item" id="lesson-basic-button">Bài học cơ bản</div>
        
                        <div class="navigation-bar-item" id="lesson-advanced-button">Bài học nâng cao</div>
        
                        <div class="navigation-bar-item" id="practice-button">Thực hành</div>
        
                        <div class="navigation-bar-item" id="game-button"">Trò chơi</div>
        
                        <div class="navigation-bar-item" id="contract-button">Liên hệ </div>
        
                        <div class="navigation-bar-item" id="acoount-button">Tài khoản</div>
        
            </div>
        </div>
        
        <div class="rightside">
        
            <h1>Phần mềm học gõ tốc kí </h2>
            <div class="siteThemeColour" ></div>
            
            <div class="page-title">
            
                <h3>Chào mừng bạn đã đến với phần mềm học gõ tốc ký </h3>
            
                <p>This website is all about how you can use your Qwerty keyboard to write at 200 words a minute or more using a skill known as Stenography or Machine Shorthand.</p>
                
                <p>Court reporters and Realtime captioners have been using this skill for decades and now, thanks to modern keyboards, you too can type at 200+ words per minute! If this sounds interesting, read on!</p>
            
                <div >
                    <div class="clickableBox" id="basic" >
                        <h3>Basic</h3>
                        <p>This section contains everything you need to get to grips with the concepts of Stenography and practice drills to get you typing some basic words.</p>
                    </div>
                    <div class="clickableBox" id="advance">
                        <h3>Intermediate</h3>
                        <p>Here you will find more lessons which expand on the Basics section. There are further practice exercises to help you learn faster.</p>
                    </div>
                </div>
            
                <div >
            
                    <div class="clickableBox" id="practice">
                        <h3>Practice</h3>
                        <p>Once you have completed the lesson sections, this section will provide valuable practice for building your speed.</p>
                    </div>
            
                    <div class="clickableBox" id="game">
                        <h3>Games</h3>
                        <p>A more fun and competitive way to practice!</p>
                    </div>
                </div>
            
            </div>
            
        </div>
    </div>
<div class="about-us"> About us </div>
</div>
  
    `,

    practice_page:
    `
    <div id="practice-page">
            <div class="container">
                <div class= "leftside-bar">
                    <div class="navigationMenu">
                                <div class="navigation-bar-item" id="home-page-button">Trang chủ</div>
                
                                <div  class="navigation-bar-item" id="lesson-basic-button">Bài học cơ bản</div>
                
                                <div class="navigation-bar-item" id="lesson-advanced-button">Bài học nâng cao</div>
          
                                <div class="navigation-bar-item" id="practice-button">Thực hành</div>
                
                                <div class="navigation-bar-item" id="game-button">Trò chơi</div>
                
                                <div class="navigation-bar-item" id="contract-button">Liên hệ </div>
                
                                <div class="navigation-bar-item" id="acoount-button">Tài khoản</div>
                    </div>
                </div>
                <div class="rightside">
                    <h1>Bài học nâng cao</h2>
                    <div class="siteThemeColour" ></div>
                    <div class="page-container">
                        <div class='main-container'>
                              <!-- area to show output -->
                    <div id="outputContainer" class="ui-draggable ui-resizable"><h1>Output</h1>
                        <textarea id="output" rows="10" cols="66"></textarea>
                    <div class="ui-resizable-handle ui-resizable-s"></div></div>
            
                    <!-- area to show the vertical notes-->
                    <div id="verticalNotesContainer" class="ui-draggable ui-resizable"><h1>Vertical Notes</h1>
                        <textarea id="verticalNotes" wrap="off" rows="10" cols="36"></textarea>
                    <div class="ui-resizable-handle ui-resizable-s"></div></div>
            
                    <!-- STANDARD KEYBOARD (This keyboard is based on the IBM PC Windows 104 keyboard) -->
                    <div id="stdKeyboard" class="ui-draggable ui-resizable">
                        <div class="stdRow">
                            <div class="stdKey code192" id="stdKeyGraveAccent" style="background-color: rgb(0, 0, 0);"><span class="upper">~</span><span class="lower"></span></div>
                            <div class="stdKey code49" id="stdKey1" style="background-color: rgb(0, 0, 0);"><span class="upper">!</span><span class="lower">1</span></div>
                            <div class="stdKey code50" id="stdKey2" style="background-color: rgb(0, 0, 0);"><span class="upper">@</span><span class="lower">2</span></div>
                            <div class="stdKey code51" id="stdKey3" style="background-color: rgb(0, 0, 0);"><span class="upper">#</span><span class="lower">3</span></div>
                            <div class="stdKey code52" id="stdKey4" style="background-color: rgb(0, 0, 0);"><span class="upper">$</span><span class="lower">4</span></div>
                            <div class="stdKey code53" id="stdKey5" style="background-color: rgb(0, 0, 0);"><span class="upper">%</span><span class="lower">5</span></div>
                            <div class="stdKey code54" id="stdKey6" style="background-color: rgb(0, 0, 0);"><span class="upper">^</span><span class="lower">6</span></div>
                            <div class="stdKey code55" id="stdKey7" style="background-color: rgb(0, 0, 0);"><span class="upper">&amp;</span><span class="lower">7</span></div>
                            <div class="stdKey code56" id="stdKey8" style="background-color: rgb(0, 0, 0);"><span class="upper">*</span><span class="lower">8</span></div>
                            <div class="stdKey code57" id="stdKey9" style="background-color: rgb(0, 0, 0);"><span class="upper">(</span><span class="lower">9</span></div>
                            <div class="stdKey code48" id="stdKey0" style="background-color: rgb(0, 0, 0);"><span class="upper">)</span><span class="lower">0</span></div>
                            <div class="stdKey code109 code189" id="stdKeyDash" style="background-color: rgb(0, 0, 0);"><span class="upper">_</span><span class="lower">-</span></div>
                            <div class="stdKey code107 code187" id="stdKeyEqualSign" style="background-color: rgb(0, 0, 0);"><span class="upper">+</span><span class="lower">=</span></div>
                            <div class="stdKey code8" id="stdKeyBackspace" style="background-color: rgb(0, 0, 0);">Backspace</div>
                        </div>
                        <div class="stdRow">
                            <div class="stdKey code9" id="stdKeyTab" style="background-color: rgb(0, 0, 0);">Tab</div>
                            <div class="stdKey code81" id="stdKeyQ" style="background-color: rgb(0, 0, 0);">Q</div>
                            <div class="stdKey code87" id="stdKeyW" style="background-color: rgb(0, 0, 0);">W</div>
                            <div class="stdKey code69" id="stdKeyE" style="background-color: rgb(0, 0, 0);">E</div>
                            <div class="stdKey code82" id="stdKeyR" style="background-color: rgb(0, 0, 0);">R</div>
                            <div class="stdKey code84" id="stdKeyT" style="background-color: rgb(0, 0, 0);">T</div>
                            <div class="stdKey code89" id="stdKeyY" style="background-color: rgb(0, 0, 0);">Y</div>
                            <div class="stdKey code85" id="stdKeyU" style="background-color: rgb(0, 0, 0);">U</div>
                            <div class="stdKey code73" id="stdKeyI" style="background-color: rgb(0, 0, 0);">I</div>
                            <div class="stdKey code79" id="stdKeyO" style="background-color: rgb(0, 0, 0);">O</div>
                            <div class="stdKey code80" id="stdKeyP" style="background-color: rgb(0, 0, 0);">P</div>
                            <div class="stdKey code219" id="stdKeyOpenBracket" style="background-color: rgb(0, 0, 0);"><span class="upper">{</span><span class="lower">[</span></div>
                            <div class="stdKey code221" id="stdKeyCloseBracket" style="background-color: rgb(0, 0, 0);"><span class="upper">}</span><span class="lower">]</span></div>
                            <div class="stdKey code220" id="stdKeyBackslash" style="background-color: rgb(0, 0, 0);"><span class="upper">|</span><span class="lower">\</span></div>
                        </div>
                        <div class="stdRow">
                            <div class="stdKey code20" id="stdKeyCapsLock" style="background-color: rgb(0, 0, 0);">Caps Lock</div>
                            <div class="stdKey code65" id="stdKeyA" style="background-color: rgb(0, 0, 0);">A</div>
                            <div class="stdKey code83" id="stdKeyS" style="background-color: rgb(0, 0, 0);">S</div>
                            <div class="stdKey code68" id="stdKeyD" style="background-color: rgb(0, 0, 0);">D</div>
                            <div class="stdKey code70" id="stdKeyF" style="background-color: rgb(0, 0, 0);">F</div>
                            <div class="stdKey code71" id="stdKeyG" style="background-color: rgb(0, 0, 0);">G</div>
                            <div class="stdKey code72" id="stdKeyH" style="background-color: rgb(0, 0, 0);">H</div>
                            <div class="stdKey code74" id="stdKeyJ" style="background-color: rgb(0, 0, 0);">J</div>
                            <div class="stdKey code75" id="stdKeyK" style="background-color: rgb(0, 0, 0);">K</div>
                            <div class="stdKey code76" id="stdKeyL" style="background-color: rgb(0, 0, 0);">L</div>
                            <div class="stdKey code59 code186" id="stdKeySemicolon" style="background-color: rgb(0, 0, 0);"><span class="upper">:</span><span class="lower">;</span></div>
                            <div class="stdKey code222" id="stdKeySingleQuote" style="background-color: rgb(0, 0, 0);"><span class="upper">"</span><span class="lower">'</span></div>
                            <div class="stdKey code13" id="stdKeyEnter" style="background-color: rgb(0, 0, 0);">Enter</div>
                        </div>
                        <div class="stdRow">
                            <div class="stdKey code16" id="stdKeyLeftShift" style="background-color: rgb(0, 0, 0);">Shift</div>
                            <div class="stdKey code90" id="stdKeyZ" style="background-color: rgb(0, 0, 0);">Z</div>
                            <div class="stdKey code88" id="stdKeyX" style="background-color: rgb(0, 0, 0);">X</div>
                            <div class="stdKey code67" id="stdKeyC" style="background-color: rgb(0, 0, 0);">C</div>
                            <div class="stdKey code86" id="stdKeyV" style="background-color: rgb(0, 0, 0);">V</div>
                            <div class="stdKey code66" id="stdKeyB" style="background-color: rgb(0, 0, 0);">B</div>
                            <div class="stdKey code78" id="stdKeyN" style="background-color: rgb(0, 0, 0);">N</div>
                            <div class="stdKey code77" id="stdKeyM" style="background-color: rgb(0, 0, 0);">M</div>
                            <div class="stdKey code188" id="stdKeyComma" style="background-color: rgb(0, 0, 0);"><span class="upper">&lt;</span><span class="lower">,</span></div>
                            <div class="stdKey code190" id="stdKeyPeriod" style="background-color: rgb(0, 0, 0);"><span class="upper">&gt;</span><span class="lower">.</span></div>
                            <div class="stdKey code191" id="stdKeySlash" style="background-color: rgb(0, 0, 0);"><span class="upper">?</span><span class="lower">/</span></div>
                            <div class="stdKey code16" id="stdKeyRightShift" style="background-color: rgb(0, 0, 0);">Shift</div>
                        </div>
                        <div class="stdRow">
                            <div class="stdKey code17" id="stdKeyLeftControl" style="background-color: rgb(0, 0, 0);">Ctrl</div>
                            <div class="stdKey code91" id="stdKeyLeftWindows" style="background-color: rgb(0, 0, 0);">Win</div>
                            <div class="stdKey code18" id="stdKeyLeftAlt" style="background-color: rgb(0, 0, 0);">Alt</div>
                            <div class="stdKey code32" id="stdKeySpace" style="background-color: rgb(0, 0, 0);">Space</div>
                            <div class="stdKey code18" id="stdKeyRightAlt" style="background-color: rgb(0, 0, 0);">Alt</div>
                            <div class="stdKey code92" id="stdKeyRightWindow" style="background-color: rgb(0, 0, 0);">Win</div>
                            <div class="stdKey code93" id="stdKeyMenu" style="background-color: rgb(0, 0, 0);">Menu</div>
                            <div class="stdKey code17" id="stdKeyRightControl" style="background-color: rgb(0, 0, 0);">Ctrl</div>
                        </div>
                    <div class="ui-resizable-handle ui-resizable-e"></div><div class="ui-resizable-handle ui-resizable-s"></div><div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 1001;"></div></div>
            
                    <!-- STENO KEYBOARD -->
                    <div id="stenoKeyboard" class="ui-draggable ui-resizable">
                        <div class="stenoNumberBar">
                            <div class="stenoKey numberBar code48 code49 code50 code51 code52 code53 code54 code55 code56 code57" id="stenoKeyNumberBar" style="background-color: rgb(0, 0, 0);"></div>
                        </div>
                        <div class="stenoUpperBank">
                            <div class="stenoKey square code81 code65" id="stenoKeyS-1" style="background-color: rgb(0, 0, 0);">S</div>
                            <div class="stenoKey square code87" id="stenoKeyT-" style="background-color: rgb(0, 0, 0);">T</div>
                            <div class="stenoKey square code69" id="stenoKeyP-" style="background-color: rgb(0, 0, 0);">P</div>
                            <div class="stenoKey square code82" id="stenoKeyH-" style="background-color: rgb(0, 0, 0);">H</div>
                            <div class="stenoKey square code71 code72 code84 code89" id="stenoKeyAsterisk1" style="background-color: rgb(0, 0, 0);">*</div>
                            <div class="stenoKey square code85" id="stenoKey-F" style="background-color: rgb(0, 0, 0);">F</div>
                            <div class="stenoKey square code73" id="stenoKey-P" style="background-color: rgb(0, 0, 0);">P</div>
                            <div class="stenoKey square code79" id="stenoKey-L" style="background-color: rgb(0, 0, 0);">L</div>
                            <div class="stenoKey square code80" id="stenoKey-T" style="background-color: rgb(0, 0, 0);">T</div>
                            <div class="stenoKey square code219" id="stenoKey-D" style="background-color: rgb(0, 0, 0);">D</div>
                        </div>
                        <div class="stenoLowerBank">
                            <div class="stenoKey rounded code81 code65" id="stenoKeyS-2" style="background-color: rgb(0, 0, 0);">S</div>
                            <div class="stenoKey rounded code83" id="stenoKeyK-" style="background-color: rgb(0, 0, 0);">K</div>
                            <div class="stenoKey rounded code68" id="stenoKeyW-" style="background-color: rgb(0, 0, 0);">W</div>
                            <div class="stenoKey rounded code70" id="stenoKeyR-" style="background-color: rgb(0, 0, 0);">R</div>
                            <div class="stenoKey rounded code71 code72 code84 code89" id="stenoKeyAsterisk2" style="background-color: rgb(0, 0, 0);">*</div>
                            <div class="stenoKey rounded code74" id="stenoKey-R" style="background-color: rgb(0, 0, 0);">R</div>
                            <div class="stenoKey rounded code75" id="stenoKey-B" style="background-color: rgb(0, 0, 0);">B</div>
                            <div class="stenoKey rounded code76" id="stenoKey-G" style="background-color: rgb(0, 0, 0);">G</div>
                            <div class="stenoKey rounded code59 code186" id="stenoKey-S" style="background-color: rgb(0, 0, 0);">S</div>
                            <div class="stenoKey rounded code222" id="stenoKey-Z" style="background-color: rgb(0, 0, 0);">Z</div>
                        </div>
                        <div class="stenoVowelKeys">
                            <div class="stenoKey rounded code67" id="stenoKeyA-" style="background-color: rgb(0, 0, 0);">A</div>
                            <div class="stenoKey rounded code86" id="stenoKeyO-" style="background-color: rgb(0, 0, 0);">O</div>
                            <div class="stenoKey rounded code78" id="stenoKey-E" style="background-color: rgb(0, 0, 0);">E</div>
                            <div class="stenoKey rounded code77" id="stenoKey-U" style="background-color: rgb(0, 0, 0);">U</div>
                        </div>
                    <div class="ui-resizable-handle ui-resizable-e"></div><div class="ui-resizable-handle ui-resizable-s"></div><div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 1001;"></div></div>
            
                                </div>
                            </div>
                        
                    </div>
            </div>
            <div class="about-us"> About us </div>
            </div>
    `,
}