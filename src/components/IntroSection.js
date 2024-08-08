import React, { useEffect } from 'react';
import './IntroSection.css';
import Swal from 'sweetalert2';

const IntroSection = () => {
  useEffect(() => {
    const consoleText = (words, id, colors) => {
      if (colors === undefined) colors = ['#fff'];
      let visible = true;
      const con = document.getElementById('console');
      let letterCount = 1;
      let x = 1;
      let waiting = false;
      const target = document.getElementById(id);
      target.setAttribute('style', 'color:' + colors[0]);
      setInterval(() => {
        if (letterCount === 0 && waiting === false) {
          waiting = true;
          target.innerHTML = words[0].substring(0, letterCount);
          setTimeout(() => {
            const usedColor = colors.shift();
            colors.push(usedColor);
            const usedWord = words.shift();
            words.push(usedWord);
            x = 1;
            target.setAttribute('style', 'color:' + colors[0]);
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (letterCount === words[0].length + 1 && waiting === false) {
          waiting = true;
          setTimeout(() => {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (waiting === false) {
          target.innerHTML = words[0].substring(0, letterCount);
          letterCount += x;
        }
      }, 120);

      setInterval(() => {
        if (visible === true) {
          con.className = 'console-underscore hidden';
          visible = false;
        } else {
          con.className = 'console-underscore';
          visible = true;
        }
      }, 400);
    };

    consoleText(['Front-end Developer', 'Hello World!', 'Made with Love.'], 'text', ['tomato', 'rebeccapurple', 'lightblue']);
  }, []);

  const handleDownload = (e) => {
    e.preventDefault();

    try {
      const link = document.createElement('a');
      link.href = '/images/Joene Tuban Resume.pdf';
      link.download = 'Joene_Tuban_Resume.pdf';

      // Append to the document and trigger the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Show success alert
      Swal.fire({
        icon: 'success',
        title: 'Download Successful',
        text: 'Resume has been downloaded successfully!',
      });
    } catch (error) {
      // Show error alert
      Swal.fire({
        icon: 'error',
        title: 'Download Failed',
        text: 'There was an error downloading the resume. Please try again later.',
      });
    }
  };

  return (
    <div id='home' className="background-image">
      <div className="intro-text">
        <h1>Hi! I'm Joene Tuban</h1>
        <div className="console-container">
          <span id="text">Front-end Developer</span>
          <div className="console-underscore" id="console">_</div>

          
          <ul className="example-2">
  <li className="icon-content">
    <a
      href="www.linkedin.com/in/joenetuban"
      aria-label="LinkedIn"
      data-social="linkedin"
    >
      <div className="filled"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-linkedin"
        viewBox="0 0 16 16"
      >
        <path
          d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
          fill="currentColor"
        ></path>
      </svg>
    </a>
    <div className="tooltip">LinkedIn</div>
  </li>
  <li className="icon-content">
    <a
      href="https://github.com/Jhong1021"
      aria-label="GitHub"
      data-social="github"
    >
      <div className="filled"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-github"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
          fill="currentColor"
        ></path>
      </svg>
    </a>
    <div className="tooltip">GitHub</div>
  </li>
  <li className="icon-content">
    <a
      href="https://www.instagram.com/joene.tuban?igsh=MWRpcm5rczQybHZtNw%3D%3D&utm_source=qr"
      aria-label="Instagram"
      data-social="instagram"
    >
      <div className="filled"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-instagram"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.829 0 8c0 2.171.01 2.445.048 3.3.037.85.174 1.432.373 1.82.23.59.527.97.923 1.417a3.897 3.897 0 0 0 1.417.923c.388.199.97.336 1.82.373.855.037 1.129.048 3.3.048 3.3s0 .235.012.34c.018.097.043.195.071.29.142.558.33 1.094.572 1.618a7.184 7.184 0 0 0 1.188 2.246c.623.572 1.252 1.1 1.927 1.618.43.366.867.749 1.315 1.1.453.354.89.683 1.32 1 .596.425 1.227.73 1.887.929.628.183 1.271.26 1.918.261.018 0 .035-.003.053-.003.092 0 .19-.08.367-.197.496-.118.129-.278.198-.447.198-.027 0-.053-.002-.08-.003C8.377 16 8.251 16 8 16s-.377 0-.563-.008a6.293 6.293 0 0 1-1.238-.21c-.495-.098-.981-.24-1.452-.42-.629-.243-1.254-.573-1.867-.923-.727-.359-1.47-.782-2.228-1.26-1.028-.592-2.065-1.243-3.034-1.938-.473-.348-.932-.741-1.407-1.073a7.111 7.111 0 0 1-1.59-1.59C.054 12.139-.327 10.807-.597 9.554a4.823 4.823 0 0 1-.082-.515c-.01-.156-.012-.31-.012-.446v-4.16c0-.136.002-.29.012-.446a4.823 4.823 0 0 1 .082-.515c.267-1.253.548-2.495.897-3.716a7.091 7.091 0 0 1 1.038-1.99c.51-.556 1.085-1.042 1.662-1.513.943-.785 1.882-1.57 2.859-2.24.646-.38 1.36-.678 2.094-.873a7.322 7.322 0 0 1 1.565-.275c.202 0 .398.034.593.072.098.019.186.044.284.074.221.062.435.142.652.242.148.054.297.106.443.167.064.044.128.093.188.144.094.078.188.162.28.242.105.089.205.187.309.278.074.053.145.114.21.174.115.097.229.195.334.298.031.038.06.077.089.116.106.138.213.283.31.426a6.042 6.042 0 0 1 .78 1.85c.086.306.154.614.215.925.124.618.238 1.234.32 1.855.072.548.146 1.098.146 1.64s-.074 1.093-.146 1.64c-.082.621-.196 1.237-.32 1.855a6.043 6.043 0 0 1-.781 1.85c-.095.143-.202.288-.31.426-.03.039-.058.078-.089.116a6.304 6.304 0 0 1-.334.298c-.105.083-.215.16-.33.24-.063.051-.126.1-.188.144-.217.1-.431.18-.652.242-.195.038-.391.072-.593.072-.28 0-.556-.025-.831-.075a7.327 7.327 0 0 1-1.566-.275c-.734-.195-1.448-.493-2.094-.873-.977-.671-1.916-1.455-2.859-2.24-.577-.471-1.222-.957-1.662-1.513a7.091 7.091 0 0 1-1.038-1.99c-.349-1.22-.63-2.462-.897-3.716-.08-.225-.145-.455-.207-.687-.076-.269-.14-.54-.2-.814a4.796 4.796 0 0 1-.072-.493v-.205h2.51z"
          fill="currentColor"
        ></path>
      </svg>
    </a>
    <div className="tooltip">Instagram</div>
  </li>

  <li className="icon-content">
    <a
      href="https://www.facebook.com/joene.tuban?mibextid=LQQJ4d"
      aria-label="Facebook"
      data-social="facebook"
    >
      <div className="filled"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-facebook"
        viewBox="0 0 16 16"
      >
        <path
          d="M6.694 16V9.197H4.743V7.148h1.951V5.626c0-2.033 1.278-3.177 3.138-3.177.888 0 1.65.065 1.868.094v2.12l-1.285.001c-1.008 0-1.202.479-1.202 1.184v1.548h2.404l-.313 2.05h-2.091V16h-2.577z"
          fill="currentColor"
        ></path>
      </svg>
    </a>
    <div className="tooltip">Facebook</div>
  </li>
</ul>



          <div className="button-container">
            <button className="cssbuttons-io-button" onClick={handleDownload}>
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z" fill="currentColor"></path>
              </svg>
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
