let data = [
    {
        "id": "correctLogin",
        "description": "Login correct credential",
        "info": {
            "telephoneNumber": "0979448402",
            "password": "NhapPassDung"
        }
    },

    {
        "id": "incorrectLogin",
        "description": "Login with wrong credential",
        "info": {
            "telephoneNumber": "1234567890",
            "password": "abcxyzt"
        }
    }
];
export default new Map(data.map((i) => [i.id, i]));
