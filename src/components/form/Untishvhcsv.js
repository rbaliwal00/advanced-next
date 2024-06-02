const a = {object: { profile: { data: { dob: "22/3/2020", education: { data: { cgpa: "1", from_date: "today", institution_city: "blr", institution_name: "ff", level: "1", passout_year: "22/33/22", study_field: "sgts", to_date: "1/12/2012"
                    }, on_conflict: { constraint: "education_pkey", update_columns: ["cgpa"]
                    }
                }, experience: { data: { department: "cook", brand_name: "hitech", from_date: "21/3/2012", monthly_salary: "", position: "", sub_category: "", work_experience: "", type: ""
                    }
                }, first_name: "", image_url: "", gender: "", preference: { data: { aadhar: "", internship: false, one_day_job: false, partime_job: false, working_city: ""
                    }
                }, references: { data: { brand_name: "", department: "", phone_number: "", position: ""
                    }
                }, sub_type: "", type: "", vc_theme: "", website: ""
            }
        }
    }
}

 console.log(JSON.stringify(a))