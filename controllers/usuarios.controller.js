const Usuario = require("./../models/usuarios"); 

exports.index = (req, res) => {
    res.status(200).json({ message: "Rota Usuários funcionando!" });
};

exports.postCreate = async (req,res) => {
    if(!req.body.name){
        res.status(400).json({message: "O nome está vazio!"});
        return;
    }
    if(!req.body.username){
        res.status(400).json({message: "O valor está vazio!"});
        return;
    }
    if(!req.body.password){
        res.status(400).json({message: "O valor está vazio!"});
        return;
    }
    await Usuario.create(req.body).then( () => {
        res.status(201).json({message: "Usuário adicionado!"})
    }).catch((err) => {
        res.status(400).json({message: "Ocorreu um erro!"});
        console.error(err);
    });
}

exports.putUpdate = async (req,res) => {
    if(req.params.id.length != 24){
        res.status(400).json({message: "ID incorreta!"});
        return true;
    }
    if(!req.body.name){
        res.status(400).json({message: "O nome está vazio!"});
        return;
    }
    if(!req.body.username){
        res.status(400).json({message: "O valor está vazio!"});
        return;
    }
    if(!req.body.password){
        res.status(400).json({message: "O valor está vazio!"});
        return;
    }
    await Usuario.findByIdAndUpdate(req.params.id,req.body).then(() => {
        res.status(200).json({message: "Usuário atualizado"})
    }).catch((err) => {
        res.status(400).json({message: "Ocorreu um erro!"});
        console.error(err);
    });
}


exports.getRead = async (req,res) => {
    if(req.params.id.length != 24){
        res.status(400).json({message: "ID incorreta!"});
        return true;
    }
    await Usuario.findById(req.params.id).then((usuarios) => {
        res.status(200).json(usuarios);
    }).catch((err) => {
        res.status(404).json({message: "O usuário não foi encontrado!"});
        console.error(err);
    });
}

exports.readAll = async (req,res) => {
    await Usuario.find({}).then((usuarios) => {
        res.status(200).json(usuarios);
    }).catch((err) => {
        res.status(404).json({message: "Não há usuários na lista!"});
        console.error(err);
    });
}

exports.delDelete = async (req,res) => {
    if(req.params.id.length != 24){
        res.status(400).json({message: "ID incorreta!"});
        return true;
    }
    await Usuario.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({message: "O usuário foi deletado!"});
    }).catch((err) => {
        res.status(404).json({message: "O usuário não foi encontrado!"});
        console.error(err);
    });
}

exports.login = async (req,res) => {
    if(req.params.id.length != 24){
        res.status(400).json({message: "ID incorreta!"});
        return true;
    }
    await Usuario.findByIdAndUpdate(req.params.id,{ $set: { last_login: Date.now() }}, {new: true}).then(() => {
        res.status(200).json({message: "Novo login registrado!"});
    }).catch((err) => {
        res.status(404).json({message: "Erro!"});
        console.error(err);
    });
}