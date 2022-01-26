export default function getUsers() {
  return new Promise((success, reject) => {
    success([
      { user: '@MrRobotUy', followers: 199 }, 
      { user: '@Brandon', followers: 1000 }, 
      { user: '@JoseMaria', followers: 500 }])
  });
}
