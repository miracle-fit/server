
const All = (model, req, res) => {
    model.findAll().then((data) => {
        res.json({
            status: 200,
            data
        })
    }).catch((err) => {
        res.send(err)
    })
}

const AllWithInclude = (model, req, res, include) => {
    model.findAll({
        include: include,
        order: [
            ['id', 'DESC'],
        ]
    }).then((data) => {
        res.json({
            status: 200,
            data
        })
    }).catch((err) => {
        res.send(err)
    })
}

const AllWithFilter = async (model, req, res, filter, include) => {
    await model.findAll({
        where: { [filter]: req.params.id },
        include: include,
        order: [['id', 'ASC']]
    }).then((data) => {
        res.json({
            status: 200,
            data
        })
    }).catch((err) => {
        res.send(err)
    })
}

const One = (model, req, res) => {
    model.findByPk(req.params.id).then((data) => {
        res.json({
            status: 200,
            data
        })
    }).catch((err) => {
        res.send(err)
    })
}


const OneWithInclude = async (model, req, res, include) => {
    await model.findOne({
        where: { id: req.params.id },
        include: include
    }).then((data) => {
        res.json({
            status: 200,
            data
        })
    }).catch((err) => {
        res.send(err)
    })
}

const Post = (model, req, res, JoiSchema) => {
    JoiSchema.validateAsync(req.body).then(async (bag) => {
        if (bag) {
            await model.create(bag).then((data) => {
                res.json({
                    status: 200,
                    error: false,
                    data
                })
            }).catch((err) => {
                res.json({
                    error: true,
                    message: err
                })
            })
        }
    }).catch((err) => {
        res.send(err)
    })
}

const Patch = async (model, req, res) => {
    await model.findOne({ where: { id: req.params.id } }).then(async (table) => {
        if (table) {
            await table.update(req.body).then(updatedTable => {
                res.json(updatedTable)
            }).catch((err) => {
                res.json({
                    error: true,
                    message: err
                })
            })
        } else {
            res.json({
                status: 400,
                message: "This row does not exis in this tablet",
            })
        }
    })
}

const Delete = async (model, req, res) => {
    await model.findOne({ where: { id: req.params.id } }).then((table) => {
        if (table) {
            table.destroy().then(() => {
                res.json({
                    status: 200,
                    message: "row deleted succefully"
                })
            }).catch((err) => {
                res.send(err)
            })
        } else {
            res.json({
                status: 400,
                message: "This row does not exist in this table"
            })
        }
    }).catch((err) => {
        res.send(err)
    })
}

module.exports = {
    Get: {
        All,
        AllWithInclude,
        One,
        OneWithInclude,
        AllWithFilter
    },
    Post,
    Patch,
    Delete
}