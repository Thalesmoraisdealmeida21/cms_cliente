export interface AllPages {

    count: number
    rows: [
        {
            id: number,
            titulo: string,
            descricao: Text,
            imgCapa: string,
            createdAt: Date,
            updatedAt: Date
        }
    ]
}
