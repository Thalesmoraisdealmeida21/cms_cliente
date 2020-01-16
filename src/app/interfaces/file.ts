export interface File {
    file:{
        capa: {
            size: BigInteger,
            path: String,
            type: String,
            mtime: Date
        }
    }
    pathImg: String
}
