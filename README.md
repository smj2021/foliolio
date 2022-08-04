# Welcome to my new portfolio!

[Visit portfolio here]()

## This is my new portfolio project, now that I've had some time in my first job I wanted to apply things I've learned and refresh. I'll be revisiting past projects to refactor as time permits and adding new projects as well.

## Development

1. I began this process by building out a Trello board to provide some shape to the project in terms of critical components vs. "nice-to-haves".
2. Determined I would use "modern React (functional components) vs. "traditional React (class components) so I could get some additional practice with hooks if able.
3. I decided I would try my best to record every event when I work on this project here in the README so anyone interested can follow along with the timeline.

  July 13, 2022: I added a portfolio.js file to hold variables. I did this in order to make the project more modular and easier to edit as information changes. It just looks cleaner.

  I also added some more structure to the About.jsx file, icluding importing and destructuring the ABOUT variable so I can access the properties as variables themselves.

  Lastly today, I also added the Contact.jsx since it was among the simplest components to build. I started with a conditional inside the component to return a null value if there is no email address in the portfolio.js file. Additionally, I used a template literal in the <a> href to substitute the correct value in the clickable link.

  August 3, 2022: I spent the last few weeks dealing with Covid round two and an assortment of associated issues, so I didn't really get to do much. Today I sat down and added a simple footer and rendered my contact info. I also added the skills component and destructured the skills object because it holds two keys each with an array as a value. Doing this allowed me to more directly access the nested arrays for mapping.

  I'm going to take some time to think about whether or not I want to use containers for my components to ensure separation of concerns. It's not necessary, but I think it may make things look a little neater throughout the repo when (if?) people come to take a look at this code. 