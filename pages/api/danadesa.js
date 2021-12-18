// Nextjs API route support: https://nextjsorg/docs/api-routes/introduction
const danadesa = {
    "pendapatan": [
        {
            "nama": "Dana Desa",
            "anggaran": "10500000",
            "realisasi": "10000000",
            "selisih": "500000",
            "presentase": "54"
        }
    ],
    "belanja": [
        {
            "nama": "Bidang Pelaksanaan Pembangunan Desa",
            "anggaran": "1100000",
            "realisasi": "1000000",
            "selisih": "100000",
            "presentase": "50"
        },
        {
            "nama": "Bidang Pemberdayaan Masyarakat",
            "anggaran": "2100000",
            "realisasi": "2000000",
            "selisih": "100000",
            "presentase": "50"
        },
        {
            "nama": "Bidang Penanggulangan Bencana Desa",
            "anggaran": "3100000",
            "realisasi": "3000000",
            "selisih": "100000",
            "presentase": "50"
        }
    ],
    "pembiayaan": [
        {
            "nama": "Pengeluaran Pembiayaan	",
            "anggaran": "4100000",
            "realisasi": "4000000",
            "selisih": "100000",
            "presentase": "54"
        }
    ],
};

export default function allHandler(req, res) {
    res.status(200).json(danadesa);
};

