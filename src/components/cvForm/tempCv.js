export default {
    "data": [
        {
            "id": "0b64a05f-9845-4f05-acef-40ab71fab46c",
            "first_name": "Name 4",
            "last_name": "Name 2",
            "gender": "Brocolli",
            "dob": "Today",
            "image_url": "Url 1",
            "website": "example.com",
            "vc_theme": "Vc theme 1",
            "cv_theme": "CV theme 1",
            "sub_type": "Sub type 1",
            "type": "Type 1",
  "auth_id": "34c3fdc2-d927-440d-b305-8ef8e1834678",
            "awards": {
                "data": [
                    {
                        "brand_name": "Brand 1",
                        "department": "Department 1",
                        "name": "Some name",
                        "position": "Position 1"
                    }
                ],
                "on_conflict": {
                    "constraint": "awards_pkey",
                    "update_columns": [
                        "brand_name",
                        "department",
                        "name",
                        "position"
                    ]
                }
            },
            "education": {
                "data": [
                    {
        "id":"d332b99e-4551-4ecc-991f-9eaaf6ccd787",
                        "cgpa": "5.5",
                        "from_date": "2023-05-01",
                        "to_date": "2024-03-01",
                        "institution_city": "City 1",
                        "institution_name": "Institution 69",
                        "level": "Level 69",
                        "passout_year": "2022",
                        "study_field": "Field 1"
                    }
                ],
                "on_conflict": {
                    "constraint": "education_pkey",
                    "update_columns": [
                        "cgpa",
                        "from_date",
                        "to_date",
                        "institution_city",
                        "institution_name",
                        "level",
                        "passout_year",
                        "study_field"
                    ]
                }
            },
            "experience": {
                "data": [
                    {
                        "brand_name": "Brand 1",
                        "department": "Department 1",
                        "from_date": "2022-03-03",
                        "to_date": "2023-03-04",
                        "monthly_salary": 100000,
                        "position": "Position 1",
                        "sub_category": "Sub category 1",
                        "type": "Type 1",
                        "work_experience": "Experience 1"
                    }
                ],
                "on_conflict": {
                    "constraint": "experience_pkey",
                    "update_columns": [
                        "brand_name",
                        "department",
                        "from_date",
                        "to_date",
                        "monthly_salary",
                        "position",
                        "sub_category",
                        "type",
                        "work_experience"
                    ]
                }
            },
            "preference": {
                "data": [
                    {
                        "aadhar": "Aadhar 1",
                        "internship": false,
                        "one_day_job": false,
                        "partime_job": false,
                        "passport": "Passport 1",
                        "working_city": "City 1"
                    }
                ],
                "on_conflict": {
                    "constraint": "preference_pkey",
                    "update_columns": [
                        "aadhar",
                        "internship",
                        "one_day_job",
                        "partime_job",
                        "passport",
                        "working_city"
                    ]
                }
            },
            "references": {
                "data": [
                    {
                        "brand_name": "Name 1",
                        "department": "Department 1",
                        "email": "user@example.com",
                        "name": "user",
                        "phone_number": "1231231231",
                        "position": "Position 1"
                    }
                ],
                "on_conflict": {
                    "constraint": "reference_pkey",
                    "update_columns": [
                        "brand_name",
                        "department",
                        "email",
                        "name",
                        "phone_number",
                        "position"
                    ]
                }
            }
        }
    ],
    "on_conflict": {
        "constraint": "profile_pkey",
        "update_columns": [
            "first_name",
            "last_name",
            "gender",
            "dob",
            "image_url",
            "website",
            "vc_theme",
            "cv_theme",
            "sub_type",
            "type"
        ]
    }
}