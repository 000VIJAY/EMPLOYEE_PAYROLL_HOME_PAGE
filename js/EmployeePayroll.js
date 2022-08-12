class EmployeeePayrollData
{
        get gender() {return this._gender;}
        set gender(gender){
            // let genederRegex = RegExp('^[M,F]{1}[a-z]{3,7}');
            // if(genederRegex.test(gender))
            // {this._gender = gender;}
            // else{ throw 'Wrong input for gender';}
            this._gender = gender;}
        get startDate() {return this._startDate;}
        set startDate(startDate) {this._startDate = startDate;}
        get name(){return this._name}
        set name(name){
            let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
            if (nameRegex.test(name))
            this._name=name;
            else throw 'Name is incorrect';
        }
        get salary(){return this._salary;}
        set salary(salary){
            let salaryValidate = RegExp('^[1-9]{1}[0-9]{1,6}$')
            if(salaryValidate.test(salary))
            {this._salary = salary;}
            else{throw 'Wrong input';}
        }
        get id(){return this._id;}
        set id(id){
            let idValidate = RegExp('^[1-90-9]{1,3}$')
            if(idValidate.test(id)){this._id = id;}
            else
            {throw "Id is not valid kindly give valid id ";}
        }
        get profilePic(){return this._profilePic;}
        set profilePic(profilePic){this._profilePic=profilePic}
        get department(){return this._department;}
        set department(department){
            this._department = department;
        }
        get note(){return this._note;}
        set note(note){
            this._note = note;
        }

    toString()
    {
        const option = {year: 'numeric' , month: 'long', day: 'numeric'};
        const empDate = !this._startDate ? "undefined":new Date().toLocaleDateString("en-us",option);
        return ", name = "+this.name +", Gender = "+this.gender+", profile Pic = "+this.profilePic +", department = "+this.department+", salary = "+this.salary+" , StartDate = "+empDate +", note = "+this.note;
    }
}