// brandPrices.js
// File ini berisi data harga dasar untuk setiap merek bata ringan
// beserta penyesuaian ongkos kirim spesifik berdasarkan lokasi.

const baseBrandPrices = {
    "SSI": { 
        price: 390000, 
        locationAdjustments: {} // Tidak ada penyesuaian khusus untuk SSI
    },
    "Platinum": { 
        price: 380000, 
        locationAdjustments: {
            "Bandung Barat": {
                "Cikalong Wetan": -5000 // Platinum lebih murah 5000 untuk Cikalong Wetan
            },
            "Bandung": {
                "Cicalengka": 3000 // Platinum lebih mahal 3000 untuk Cicalengka
            }
        }
    },
    "Acon": { 
        price: 375000, 
        locationAdjustments: {} // Tidak ada penyesuaian khusus untuk Acon
    },
    "SBI": { 
        price: 410000,
        locationAdjustments: {
            "Indramayu": {
                "Krangkeng": -50000 // SBI lebih murah 50000 untuk Krangkeng
            }
        }
    }
};
