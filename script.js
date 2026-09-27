function showTopic(topic) {

    const computersLesson =
        document.getElementById("computersLesson");

    const programmingLesson =
        document.getElementById("programmingLesson");

    const internetLesson =
        document.getElementById("internetLesson");


    computersLesson.style.display = "none";

    programmingLesson.style.display = "none";

    internetLesson.style.display = "none";


    if (topic === "computers") {

        computersLesson.style.display = "block";

    }


    if (topic === "programming") {

        programmingLesson.style.display = "block";

    }


    if (topic === "internet") {

        internetLesson.style.display = "block";

    }

}
