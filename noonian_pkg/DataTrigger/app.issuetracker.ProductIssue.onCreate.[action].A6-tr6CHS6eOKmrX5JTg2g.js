function () {
    if(this._current_user && this._current_user._id && !this.requester) {
        this.requester = {_id:this._current_user._id};
    }
    if(!this.status) {
        this.status='new';
    }
    if(!this.priority) {
        this.priority = '0_tbd';
    }
}