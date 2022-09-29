import { Field, Fields, IdEntity } from "remult";
import { User } from "../../users/user";

export class Order extends IdEntity {

    @Field<Order, User>(() => User, {
        validate: (row, col) => {
            if (!col.value) {
                col.error = 'חובה'
            }
        }
    })
    customer!: User

    @Fields.dateOnly({ caption: 'תאריך' })
    date!: Date

    @Fields.string({ caption: 'שעה', inputType: 'time' })
    time!: string

}
