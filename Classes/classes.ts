interface Item{
    
    displayName : string
    readonly trackingNumber: string
}

class IntentoryStore{

    private _categories: String[]
    private _items : Item[]
    

    constructor(){
        this._categories = [];
        this._items = [];

        // this._isInitialized = this._load();
    }
    get categories(){
        return this._categories;
    }
}



// updates only some parametrs of interface item and restricts from changing trackingNumber
function updateInventoryItem(trackingNumber: string,
    item: Omit<Partial <Item>,"trackingNumber" | "createDate">){

    }


updateInventoryItem("123",{
    displayName:"updated name",
    // trackingNumber:"12345"
})
