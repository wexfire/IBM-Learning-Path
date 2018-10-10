let user = getSession('USER')
console.log(user)
if (!user) {
    alert('Favor faça login')
    window.location.href = '/'
}