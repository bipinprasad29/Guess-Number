    const id = (id) => document.getElementById(id);
      let num = id("number"),
        randomnum,
        msg = id("msg"),
        btn = id("btn");

      let count = document.querySelector(".count");
      let  noOfAttempt = 0;
      count.innerHTML = "No. of Attempt: " +  noOfAttempt;
      btn.addEventListener("click", () => {
        if (num.value) {
           noOfAttempt++;
          count.innerHTML = "No. of Attempt: " +  noOfAttempt;
          randomnum = Math.floor(Math.random() * 100 + 1);
          if (num.value == randomnum) {
            msg.style.display = "block";
            msg.innerText = `You Guessed the right no. in ${ noOfAttempt} attempt :)`;
            msg.style.color = "green";
            restart();
          } else {
            msg.style.display = "block";
            msg.innerText = `You Guessed the wrong no. :(
                              the no. is ${randomnum}`;
            msg.style.color = "red";
          }
        } else {
          msg.style.display = "block";
          msg.innerText = "Please Enter a valid number";
          msg.style.color = "blue";
        }
      });

      let restart = () => {
        num.value = "";
         noOfAttempt = 0;
      };
