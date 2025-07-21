module.exports=(sequelize,DataTypes)=>{


    return sequelize.define("Todo",{
        task:{
            type:DataTypes.STRING,
            allowNull:false
        },
        isCompleted:{
            type:DataTypes.BOOLEAN,
            defaultValue:false
        },
        date:{
            type:DataTypes.DATEONLY,
            allowNull:true
        }

    })


}

