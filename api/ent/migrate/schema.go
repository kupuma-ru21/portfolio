// Code generated by ent, DO NOT EDIT.

package migrate

import (
	"entgo.io/ent/dialect/sql/schema"
	"entgo.io/ent/schema/field"
)

var (
	// AppsColumns holds the columns for the "apps" table.
	AppsColumns = []*schema.Column{
		{Name: "id", Type: field.TypeUUID},
		{Name: "title", Type: field.TypeString},
		{Name: "detail", Type: field.TypeString},
		{Name: "link", Type: field.TypeString},
		{Name: "link_type", Type: field.TypeEnum, Enums: []string{"APP", "COMPANY"}},
		{Name: "image_url", Type: field.TypeString},
	}
	// AppsTable holds the schema information for the "apps" table.
	AppsTable = &schema.Table{
		Name:       "apps",
		Columns:    AppsColumns,
		PrimaryKey: []*schema.Column{AppsColumns[0]},
	}
	// Tables holds all the tables in the schema.
	Tables = []*schema.Table{
		AppsTable,
	}
)

func init() {
}
