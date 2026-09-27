function showTopic(topic) {

    const computersLesson =
        document.getElementById("computersLesson");

    const programmingLesson =
        document.getElementById("programmingLesson");


    computersLesson.style.display = "none";

    programmingLesson.style.display = "none";


    if (topic === "computers") {

        computersLesson.style.display = "block";

    }


    if (topic === "programming") {

        programmingLesson.style.display = "block";

    }

}
