<form action="#" method="post" enctype="multipart/form-data">
    <input type="file" name="file" class="file" />
    <input class="submit" type="submit" value="Send" />
</form>

<script>
    let form = document.querySelector("form")
    let fileInput = document.querySelector(".file")

    form.addEventListener("submit", e => {
        e.preventDefault()
        let xhr = new XMLHttpRequest()
        let formData = new FormData(form)
        xhr.open("POST", "/upload", true)
        xhr.send(formData)
    })
</script>
