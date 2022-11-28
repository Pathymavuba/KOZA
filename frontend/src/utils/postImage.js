import axios from "axios"

export async function postImage(profile) {
  const formData = new FormData()
  formData.append("file", profile)
  // eslint-disable-next-line no-undef
  formData.append("upload_preset", "pathymavuba")

  let image = await axios({
    method: "POST",
    // eslint-disable-next-line no-undef
    url: `${process.env.REACT_APP_URL_CLOUDINARY}`,
    data: formData,
  })
  return image
}
