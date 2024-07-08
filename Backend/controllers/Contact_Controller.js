const Contact = require("../models/Contact");
const ContactController = {
    index: (req, res) => {
        Contact.getAll(function (data) {
            if (data == null) {
                return res.status(200).json({
                    contacts: data,
                    status: false,
                    message: "Không tìm thấy dữ liệu",
                });
            } else {
                return res.status(200).json({
                    contacts: data,
                    status: true,
                    message: "Tải dữ liệu thành công",
                });
            }
        });
    },

    show: (req, res) => {
        const id = req.params.id;
        Menu.show(id, function (data) {
            if (data == null) {
                return res.status(200).json({
                    contacts: null,
                    status: false,
                    message: "Khong tim thay du lieu",
                });
            } else {
                return res.status(200).json({
                    contacts: data,
                    status: true,
                    message: "Tai du lieu thanh cong",
                });
            }
        });
    },

    store: (req, res) => {
        const bodyData = req.body;
        const mydata = {
            name: bodyData.name,
           user_id: 0,
            email: bodyData.email,
            phone: bodyData.phone,
            content: "Hỏi về liên kết mua sĩ",
            replay_id:bodyData.replay,
            updated_at: "2024-3-28 10:10:19",
            updated_by: 0,
            created_at: "2024-3-28 10:10:19",
            
            status: bodyData.status,
        };

        Contact.store(mydata, function (data) {
            return res.status(201).json({
                contacts: data,
                status: true,
                message: "Them du lieu thanh cong",
            });
        });
    },
    edit: (req, res) => {
        const id = req.params.id;
        const bodyData = req.body;
        //Lấy dũ liệu form
        const mydata = {
            name: bodyData.name,
            user_id: 0,
             email: bodyData.email,
             phone: bodyData.phone,
             content: "Hỏi về liên kết mua sĩ",
             replay_id:bodyData.replay,
             updated_at: "2024-3-28 10:10:19",
             updated_by: 0,
             created_at: "2024-3-28 10:10:19",
             
             status: bodyData.status,
        };
        Contact.edit(mydata, id, function (data) {
            //data thứ mà nó trả về
            console.log(data);
        });
    },
    delete: (req, res) => {
        const id = req.params.id;
        Contact.delete(id, function (data) {
            console.log(data);
        });
    },
};
module.exports = ContactController;
