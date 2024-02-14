## Media Query Break-points
# Common Break-points
Name                        Minimum width
Mobile Devices              <481px
iPads, Tablets              481px - 768px
Small screens, laptops      769px - 1024px
Desktops, large screens     1025px - 1200px
Extra large screens, TVs    >1200px 

# Bootstrap
Name	Description	        Minimum width
--	    X-Small	            none
sm	    Small	            576px
md	    Medium	            768px
lg	    Large	            992px
xl	    Extra large	        1200px
xxl	    Extra extra large	1400px

# Tailwind
Name	Minimum width
sm	    640px
md	    768px
lg	    1024px
xl	    1280px
2xl	    1536px

# Materialize
Name	Minimum width
s	    none
m	    600px
l	    992px
xl	    1200px

# Material UI
Name	Minimum width
xs	    none
sm	    600px
md	    960px
lg	    1280px
xl	    1920px


.landingPage {
  display: flex;
  flex-direction: row;
  background-color: black;
  color: bisque;
  padding: 10px;
  flex-grow: 1;
}

.intro {
  margin: auto;
  text-align: center;
  margin-left: 100px;
}

.intro p {
  margin: 10px;
  margin-left: 50px;
  font-size: 20px;
}

.highlighted {
  color: rgb(185, 8, 8);
}

.separator {
  border: 4px solid rgb(185, 8, 8);
  background-color: rgb(185, 8, 8);
  margin-top: 80px;
  flex-grow: 1;
  margin-bottom: 40px;
}

.homeImage {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding-right: 20px;
  padding-left: 10px;
}

@media screen and (max-width: 480px) {
  .separator {
    margin-top: 40px;
    margin-bottom: 10px;
    width: 100%;
    }

  .intro {
    width: fit-content;
    margin-left: 5px;
  }
}

@media screen and (max-width: 900px) {
  .landingPage {
    flex-direction: column;
    padding: 5px;
  }
  
  .intro {
    width: fit-content;
    padding-top: 100px;
    padding-bottom: 100px;
  }

  .separator {
    margin-top: 50px;
    margin-bottom: 20px;
  }
}



