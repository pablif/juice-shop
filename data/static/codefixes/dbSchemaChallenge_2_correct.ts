        `SELECT * FROM Products WHERE ((name LIKE '%:criteria%' OR description LIKE '%:criteria%') AND deletedAt IS NULL) ORDER BY name`,
        { replacements: { criteria } }
      ).then(([products]: any) => {
        }
      }).catch((error: ErrorWithParent) => {
      })
  }
}
