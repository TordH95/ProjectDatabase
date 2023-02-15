async function deleteHotel(url, hotelid) {
    console.log(url, hotelid)
    await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            id: hotelid
        })
    }).then((response) => {
        if (response.ok) {
            const resData = "Hotel deleted";
            location.reload()
            return Promise.resolve(resData);
        }
        return Promise.reject(response);
    })
    .catch((response) => {
        alert(response.statusText);
    });
}