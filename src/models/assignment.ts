"use strict";
import { Model, DataTypes } from "sequelize";
import connection from "./connection";

interface AssignmentAttributes {
    id?: number;
    url: string;
    deadline: Date,
    status?: number;
    course_id: number;

    createdAt?: Date,
    updatedAt?: Date,
}

class Assignments extends Model<AssignmentAttributes> implements AssignmentAttributes {
    public id!: number;
    public url!: string;
    public deadline!: Date;
    public status!: number;
    public course_id!: number;

    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;
}

Assignments.init(
    {
        url: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: "Assignment URL required!",
                },
            },
        },
        deadline: {
            allowNull: false,
            type: DataTypes.DATE,
            validate: {
                notEmpty: {
                    msg: "Assignment deadline required!",
                },
            },
        },
        status: {
            allowNull: false,
            defaultValue: 1,
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: {
                    msg: "Assignment status required!",
                },
            },
        },
        course_id: {
            type: DataTypes.INTEGER,
            validate: {
                isNumeric: {
                    msg: "Status must be a number!",
                },
            },
        },
    },
    {
        sequelize: connection,
        modelName: "Assignment",
    }
);

export default Assignments;
