    const id = (id) => document.getElementById(id);
      let num = id("number"),
        andomnum,
        msg = id("msg"),
        btn = id("btn");

      let count = document.querySelector(".count");
      let a = 0;
      count.innerHTML = "No. of Attempt: " + a;
      btn.addEventListener("click", () => {
        if (num.value) {
          a++;
          count.innerHTML = "No. of Attempt: " + a;
          randomnum = Math.floor(Math.random() * 100 + 1);
          if (num.value == randomnum) {
            msg.style.display = "block";
            msg.innerText = `You Guessed the right no. in ${a} attempt :)`;
            msg.style.color = "green";
            restart();
          } else {
            msg.style.display = "block";
            msg.innerText = `You Guessed the wrong no. :(
                              the no. is ${randomnum}`;
            msg.style.color = "red";
          }
        } else {
          msg.innerText = "Please Enter a valid number";
          msg.style.color = "red";
        }
      });

      let restart = () => {
        num.value = "";
        a = 0;
      };
