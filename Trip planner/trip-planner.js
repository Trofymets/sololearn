// This code is meant to work on soloLearn https://www.sololearn.com/learning/eom-project/1024/978

function main(distance, myAverageSpeed = 40) {
    var distance = parseInt(readLine(), 10);
    const minutesInHour = 60;
    var roadTripTime = distance/myAverageSpeed*minutesInHour;
    console.log(roadTripTime);
}
