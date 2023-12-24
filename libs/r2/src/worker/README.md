# Requirements from the Worker Function
- Ability to fetch files using PreSigned URL for GetObjectCommand
- Ability to upload small PDFs using PreSigned URL for PutObjectCommand
- Ability to upload large videos using PreSigned URL for MultiPartUploadCommand
- Ability to get a batch of signed URLs for a .m3u playlist

# API Design
```
POST /

{
    requestType: GET | UPLOAD_SMALL | UPLOAD_BIG | GET_HLS_PLAYLIST
    key: string
    expiresIn?: Int = 3600
}
```